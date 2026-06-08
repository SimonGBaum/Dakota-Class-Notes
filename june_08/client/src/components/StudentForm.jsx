/**
 * StudentForm.jsx
 *
 * A controlled form used for BOTH creating a new student (no initialData)
 * and editing an existing one (initialData populated from the selected record).
 *
 * Props:
 *   initialData  {object|null}  - pre-fill the form when editing; null for create
 *   onSubmit     {function}     - called with the form values object on submit
 *   onCancel     {function}     - called when the user clicks "Cancel"
 *   isEditing    {boolean}      - changes the submit button label
 */

import { useState, useEffect } from "react";

// Default shape for an empty form so we never have undefined controlled values
const EMPTY_FORM = {
  name: "",
  locker_number: "",
  age: "",
  school_email: "",
  passing: false,
};

export default function StudentForm({ initialData, onSubmit, onCancel, isEditing }) {
  const [formData, setFormData] = useState(EMPTY_FORM);

  // When initialData changes (user clicks "Edit" on a different student),
  // re-populate the form with the selected student's values.
  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        locker_number: initialData.locker_number,
        age: initialData.age,
        school_email: initialData.school_email,
        passing: initialData.passing,
      });
    } else {
      setFormData(EMPTY_FORM);
    }
  }, [initialData]);

  // Generic change handler for text / number inputs
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      // checkboxes use `checked`; everything else uses `value`
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Coerce string inputs to the correct types before sending to the API.
    // The backend validates, but sending the right types avoids false errors.
    onSubmit({
      name: formData.name.trim(),
      locker_number: parseInt(formData.locker_number, 10),
      age: parseInt(formData.age, 10),
      school_email: formData.school_email.trim().toLowerCase(),
      passing: formData.passing,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <h2>{isEditing ? "Edit Student" : "Add New Student"}</h2>

      {/* ── Name ─────────────────────────────────────── */}
      <label>
        Name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Jane Doe"
          required
        />
      </label>

      {/* ── Locker Number ────────────────────────────── */}
      <label>
        Locker Number
        <input
          type="number"
          name="locker_number"
          value={formData.locker_number}
          onChange={handleChange}
          min="1"
          placeholder="101"
          required
        />
      </label>

      {/* ── Age ──────────────────────────────────────── */}
      <label>
        Age
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          min="1"
          placeholder="16"
          required
        />
      </label>

      {/* ── School Email ─────────────────────────────── */}
      <label>
        School Email
        <input
          type="email"
          name="school_email"
          value={formData.school_email}
          onChange={handleChange}
          placeholder="jane@school.edu"
          required
        />
      </label>

      {/* ── Passing ──────────────────────────────────── */}
      <label className="checkbox-label">
        <input
          type="checkbox"
          name="passing"
          checked={formData.passing}
          onChange={handleChange}
        />
        Passing
      </label>

      {/* ── Actions ──────────────────────────────────── */}
      <div className="form-actions">
        <button type="submit">{isEditing ? "Save Changes" : "Add Student"}</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
