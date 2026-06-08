from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import String, Integer, Boolean

# ---------------------------------------------------------------------------
# App & DB setup
# ---------------------------------------------------------------------------

class Base(DeclarativeBase):
    pass

db = SQLAlchemy(model_class=Base)

app = Flask(__name__)
CORS(app)  # allow requests from the Vite dev server (different port)

# psycopg3 driver is specified with "postgresql+psycopg" (not psycopg2)
app.config["SQLALCHEMY_DATABASE_URI"] = (
    "postgresql+psycopg://francisco@localhost:5432/stud_db"
)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)


# ---------------------------------------------------------------------------
# Model
# ---------------------------------------------------------------------------

class Student(db.Model):
    __tablename__ = "students"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(120), nullable=False)
    locker_number: Mapped[int] = mapped_column(Integer, nullable=False)
    age: Mapped[int] = mapped_column(Integer, nullable=False)
    # school_email must be unique across all student records
    school_email: Mapped[str] = mapped_column(String(200), nullable=False, unique=True)
    passing: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False)

    def to_dict(self):
        """Serialize a Student instance to a plain dictionary for JSON responses."""
        return {
            "id": self.id,
            "name": self.name,
            "locker_number": self.locker_number,
            "age": self.age,
            "school_email": self.school_email,
            "passing": self.passing,
        }


# Create the table if it doesn't exist yet (idempotent on subsequent starts)
with app.app_context():
    db.create_all()


# ---------------------------------------------------------------------------
# Helper
# ---------------------------------------------------------------------------

def validate_student_payload(data, require_all=True):
    """
    Validate incoming JSON for student create / update.

    require_all=True  → all fields must be present (used for POST / PUT).
    require_all=False → only present fields are validated (not used here but
                        left for future PATCH support).

    Returns (cleaned_dict, error_message).  error_message is None on success.
    """
    fields = ["name", "locker_number", "age", "school_email", "passing"]
    cleaned = {}

    for field in fields:
        if field not in data:
            if require_all:
                return None, f"Missing required field: {field}"
            continue

        value = data[field]

        if field == "name":
            if not isinstance(value, str) or not value.strip():
                return None, "name must be a non-empty string"
            cleaned["name"] = value.strip()

        elif field == "locker_number":
            if not isinstance(value, int) or value < 1:
                return None, "locker_number must be a positive integer"
            cleaned["locker_number"] = value

        elif field == "age":
            if not isinstance(value, int) or value < 1:
                return None, "age must be a positive integer"
            cleaned["age"] = value

        elif field == "school_email":
            if not isinstance(value, str) or "@" not in value:
                return None, "school_email must be a valid email address"
            cleaned["school_email"] = value.strip().lower()

        elif field == "passing":
            if not isinstance(value, bool):
                return None, "passing must be a boolean"
            cleaned["passing"] = value

    return cleaned, None


# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------

# GET /students — return all student records
@app.route("/students", methods=["GET"])
def get_students():
    students = db.session.execute(db.select(Student).order_by(Student.id)).scalars().all()
    return jsonify([s.to_dict() for s in students]), 200


# GET /students/<id> — return a single student record
@app.route("/students/<int:student_id>", methods=["GET"])
def get_student(student_id):
    student = db.session.get(Student, student_id)
    if student is None:
        return jsonify({"error": "Student not found"}), 404
    return jsonify(student.to_dict()), 200


# POST /students — create a new student record
@app.route("/students", methods=["POST"])
def create_student():
    data = request.get_json()
    if not data:
        return jsonify({"error": "Request body must be JSON"}), 400

    cleaned, error = validate_student_payload(data, require_all=True)
    if error:
        return jsonify({"error": error}), 400

    # Guard against duplicate emails before the INSERT
    existing = db.session.execute(
        db.select(Student).where(Student.school_email == cleaned["school_email"])
    ).scalar_one_or_none()
    if existing:
        return jsonify({"error": "A student with that school_email already exists"}), 409

    student = Student(**cleaned)
    db.session.add(student)
    db.session.commit()
    return jsonify(student.to_dict()), 201


# PUT /students/<id> — fully replace an existing student record
@app.route("/students/<int:student_id>", methods=["PUT"])
def update_student(student_id):
    student = db.session.get(Student, student_id)
    if student is None:
        return jsonify({"error": "Student not found"}), 404

    data = request.get_json()
    if not data:
        return jsonify({"error": "Request body must be JSON"}), 400

    cleaned, error = validate_student_payload(data, require_all=True)
    if error:
        return jsonify({"error": error}), 400

    # Only check email uniqueness if it changed
    if cleaned["school_email"] != student.school_email:
        existing = db.session.execute(
            db.select(Student).where(Student.school_email == cleaned["school_email"])
        ).scalar_one_or_none()
        if existing:
            return jsonify({"error": "A student with that school_email already exists"}), 409

    for key, value in cleaned.items():
        setattr(student, key, value)

    db.session.commit()
    return jsonify(student.to_dict()), 200


# DELETE /students/<id> — remove a student record
@app.route("/students/<int:student_id>", methods=["DELETE"])
def delete_student(student_id):
    student = db.session.get(Student, student_id)
    if student is None:
        return jsonify({"error": "Student not found"}), 404

    db.session.delete(student)
    db.session.commit()
    return jsonify({"message": f"Student {student_id} deleted"}), 200


# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    app.run(debug=True)
