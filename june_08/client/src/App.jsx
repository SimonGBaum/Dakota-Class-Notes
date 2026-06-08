/**
 * App.jsx
 *
 * Root component — owns all application state and coordinates every CRUD
 * operation by calling the API helpers in api.js.
 *
 * State:
 *   students       - the current list fetched from the backend
 *   loading        - true while the initial list fetch is in flight
 *   error          - string shown in a banner when an API call fails
 *   showForm       - controls whether the create/edit form is visible
 *   editingStudent - null (create mode) or a student object (edit mode)
 */

import { useState, useEffect } from "react";
import { fetchStudents, createStudent, updateStudent, deleteStudent } from "./api";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import "./App.css";

export default function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  // ── Load all students once on mount ───────────────────────────────────────
  useEffect(() => {
    loadStudents();
  }, []);

  async function loadStudents() {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchStudents();
      setStudents(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // ── Open form for a new record ─────────────────────────────────────────────
  function handleAddClick() {
    setEditingStudent(null); // null = create mode
    setShowForm(true);
  }

  // ── Open form pre-filled with an existing record ───────────────────────────
  function handleEdit(student) {
    setEditingStudent(student);
    setShowForm(true);
  }

  // ── Close form without saving ──────────────────────────────────────────────
  function handleCancel() {
    setShowForm(false);
    setEditingStudent(null);
    setError(null);
  }

  // ── Create or update depending on whether editingStudent is set ────────────
  async function handleFormSubmit(formValues) {
    setError(null);
    try {
      if (editingStudent) {
        // PUT — replace the existing record
        const updated = await updateStudent(editingStudent.id, formValues);
        // Swap the old record out of local state so the UI updates instantly
        setStudents((prev) =>
          prev.map((s) => (s.id === updated.id ? updated : s))
        );
      } else {
        // POST — append the new record returned by the server (with its id)
        const created = await createStudent(formValues);
        setStudents((prev) => [...prev, created]);
      }
      setShowForm(false);
      setEditingStudent(null);
    } catch (err) {
      // Surface the server's error message inside the form area
      setError(err.message);
    }
  }

  // ── Delete a student by id ─────────────────────────────────────────────────
  async function handleDelete(id) {
    if (!window.confirm("Delete this student? This cannot be undone.")) return;
    setError(null);
    try {
      await deleteStudent(id);
      // Remove from local state so the card disappears without a full refetch
      setStudents((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="app">
      <header className="app-header">
        <h1>Student Records</h1>
        {/* Hide the "Add" button while the form is already open */}
        {!showForm && (
          <button className="btn-add" onClick={handleAddClick}>
            + Add Student
          </button>
        )}
      </header>

      {/* Global error banner — shown for both form errors and list errors */}
      {error && (
        <div className="error-banner">
          <strong>Error:</strong> {error}
          <button onClick={() => setError(null)}>✕</button>
        </div>
      )}

      {/* Form slides in when showForm is true */}
      {showForm && (
        <StudentForm
          initialData={editingStudent}
          onSubmit={handleFormSubmit}
          onCancel={handleCancel}
          isEditing={!!editingStudent}
        />
      )}

      {/* Main list of student cards */}
      <StudentList
        students={students}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
