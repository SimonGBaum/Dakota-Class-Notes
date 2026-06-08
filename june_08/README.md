# Student Records App

A full stack CRUD application for managing student records. Built with **Flask** on the backend and **React** on the frontend.

---

## What It Does

This app lets you:

- **View** all student records in a card grid
- **Add** a new student using a form
- **Edit** an existing student's information
- **Delete** a student record

Each student record contains:

| Field | Type | Notes |
|---|---|---|
| `id` | number | Auto-assigned by the database |
| `name` | string | Student's full name |
| `locker_number` | number | Must be a positive integer |
| `age` | number | Must be a positive integer |
| `school_email` | string | Must be unique across all students |
| `passing` | boolean | Whether the student is currently passing |

---

## Project Structure

```
example_proj/
├── server/               # Python/Flask backend
│   ├── app.py            # All routes, database model, and app config
│   └── requirements.txt  # Python dependencies
│
├── client/               # React frontend
│   ├── src/
│   │   ├── App.jsx           # Root component — manages all state and CRUD logic
│   │   ├── App.css           # All styles
│   │   ├── api.js            # Fetch helper functions (one per API endpoint)
│   │   └── components/
│   │       ├── StudentForm.jsx   # Create / edit form
│   │       ├── StudentCard.jsx   # Single student display card
│   │       └── StudentList.jsx   # Grid of all student cards
│   └── package.json
│
└── .venv/                # Python virtual environment (not committed to git)
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend language | Python 3.14 |
| Web framework | Flask |
| Database | PostgreSQL |
| ORM | SQLAlchemy 2.0 |
| DB driver | psycopg (v3) |
| Cross-origin requests | Flask-CORS |
| Frontend framework | React 19 |
| Frontend build tool | Vite 7 |

---

## Prerequisites

Before running this app you need:

1. **Python 3.14** installed
2. **Node.js** (v18 or higher) installed
3. **PostgreSQL** running locally on port `5432` with a database named `stud_db`

To create the database if it doesn't exist yet:

```bash
psql -U postgres -c "CREATE DATABASE stud_db;"
```

---

## Setup & Running

### 1. Start the Backend

Open a terminal and run:

```bash
# Activate the Python virtual environment
source .venv/bin/activate

# Start the Flask development server (runs on http://127.0.0.1:5000)
flask --app server/app.py run
```

The first time it starts, Flask will automatically create the `students` table in `stud_db` if it doesn't exist yet.

### 2. Start the Frontend

Open a **second terminal** and run:

```bash
cd client

# Install dependencies (only needed the first time)
npm install

# Start the Vite development server (runs on http://localhost:5173)
npm run dev
```

Then open your browser to **http://localhost:5173**.

> Both servers must be running at the same time for the app to work.

---

## Run Locally

This app requires **two terminals open at the same time** — one for the backend and one for the frontend. Follow the steps below in order.

---

### Terminal 1 — Backend

```bash
# 1. Activate the Python virtual environment
source .venv/bin/activate

# 2. Install Python dependencies
pip install -r server/requirements.txt

# 3. Start the Flask server
python server/app.py
```

The backend will be running at **http://127.0.0.1:5000**. Leave this terminal open.

---

### Terminal 2 — Frontend

Open a **new terminal window or tab**, then run:

```bash
# 1. Move into the client folder
cd client

# 2. Install JavaScript dependencies
npm install

# 3. Start the frontend dev server
npm run dev
```

The frontend will be running at **http://localhost:5174**. Leave this terminal open too.

---

### Open the App

Once both terminals are running, open your browser and go to:

**http://localhost:5174**

> If either server is stopped, the app will not work correctly. Keep both terminals running while developing.

---

## API Reference

The Flask backend exposes a REST API at `http://127.0.0.1:5000`.

| Method | URL | Description |
|---|---|---|
| `GET` | `/students` | Get all students |
| `GET` | `/students/<id>` | Get one student by ID |
| `POST` | `/students` | Create a new student |
| `PUT` | `/students/<id>` | Update an existing student |
| `DELETE` | `/students/<id>` | Delete a student |

### Example request body (POST / PUT)

```json
{
  "name": "Jane Doe",
  "locker_number": 42,
  "age": 16,
  "school_email": "jane.doe@school.edu",
  "passing": true
}
```

### Example response

```json
{
  "id": 1,
  "name": "Jane Doe",
  "locker_number": 42,
  "age": 16,
  "school_email": "jane.doe@school.edu",
  "passing": true
}
```

---

## How the Frontend Works

The app is split into small focused components:

- **`api.js`** — contains one function for each API endpoint (`fetchStudents`, `createStudent`, etc.). All network requests live here.
- **`App.jsx`** — the brain of the frontend. It stores the list of students in state and passes data and functions down to child components.
- **`StudentForm.jsx`** — a controlled form that handles both adding and editing. When you click "Edit" on a card, the form pre-fills with that student's data.
- **`StudentCard.jsx`** — displays one student's information. The green/red left border and badge indicate whether the student is passing or failing.
- **`StudentList.jsx`** — renders all student cards in a responsive grid. Also handles the loading and empty states.

---

## Common Issues

**`connection refused` on the frontend**
Make sure the Flask server is running (`flask --app server/app.py run`).

**`FATAL: database "stud_db" does not exist`**
Create the database: `psql -U postgres -c "CREATE DATABASE stud_db;"`

**`school_email already exists` error**
Each student must have a unique school email. Use a different email address.

**Port already in use**
Flask defaults to port `5000` and Vite to port `5173`. If either is taken, stop the other process using that port.
