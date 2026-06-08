/**
 * StudentCard.jsx
 *
 * Displays the details of a single student record in a card layout.
 * The Edit and Delete buttons delegate upward to the parent via props
 * rather than making API calls directly — keeping data-fetching logic
 * in one place (App.jsx).
 *
 * Props:
 *   student   {object}    - the student record to display
 *   onEdit    {function}  - called with the student object when Edit is clicked
 *   onDelete  {function}  - called with the student's id when Delete is clicked
 */

export default function StudentCard({ student, onEdit, onDelete }) {
  return (
    <div className={`student-card ${student.passing ? "passing" : "failing"}`}>
      {/* ── Header row: name + status badge ─────────────────────────── */}
      <div className="card-header">
        <h3>{student.name}</h3>
        {/* Visual indicator so passing status is obvious at a glance */}
        <span className="badge">{student.passing ? "Passing ✓" : "Failing ✗"}</span>
      </div>

      {/* ── Record details ───────────────────────────────────────────── */}
      <ul className="card-details">
        <li><strong>ID:</strong> {student.id}</li>
        <li><strong>Age:</strong> {student.age}</li>
        <li><strong>Locker:</strong> {student.locker_number}</li>
        <li><strong>Email:</strong> {student.school_email}</li>
      </ul>

      {/* ── Action buttons ───────────────────────────────────────────── */}
      <div className="card-actions">
        {/* Pass the full student object so the edit form can be pre-filled */}
        <button onClick={() => onEdit(student)}>Edit</button>

        {/* Pass only the id; the parent already has the full list */}
        <button className="btn-delete" onClick={() => onDelete(student.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
