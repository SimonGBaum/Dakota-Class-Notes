/**
 * StudentList.jsx
 *
 * Renders the full collection of student records as a grid of StudentCard
 * components.  Also handles the empty-state and loading-state messages so
 * App.jsx stays focused on data management.
 *
 * Props:
 *   students  {array}     - array of student objects from the API
 *   loading   {boolean}   - true while the initial fetch is in flight
 *   onEdit    {function}  - forwarded to each StudentCard
 *   onDelete  {function}  - forwarded to each StudentCard
 */

import StudentCard from "./StudentCard";

export default function StudentList({ students, loading, onEdit, onDelete }) {
  // Show a spinner/message while the first GET /students is pending
  if (loading) {
    return <p className="status-msg">Loading students…</p>;
  }

  // Friendly empty state instead of a blank page
  if (students.length === 0) {
    return <p className="status-msg">No students yet — add one above!</p>;
  }

  return (
    <div className="student-grid">
      {students.map((student) => (
        // key on id keeps React's reconciler efficient when the list mutates
        <StudentCard
          key={student.id}
          student={student}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
