/**
 * api.js
 *
 * Centralized fetch helpers for every student endpoint.
 * All functions return the parsed JSON body on success and throw an Error
 * (with the server's error message) on failure.
 *
 * Base URL points at the Flask dev server.  Change the constant here if
 * the backend is hosted elsewhere.
 */

const BASE_URL = "http://127.0.0.1:5000";

/**
 * Shared response handler.
 * Reads JSON from the response and throws a descriptive Error on non-2xx
 * status codes so callers can display the message directly.
 */
async function handleResponse(res) {
  const json = await res.json();
  if (!res.ok) {
    throw new Error(json.error || `HTTP ${res.status}`);
  }
  return json;
}

// ── READ ────────────────────────────────────────────────────────────────────

/** Fetch every student record. Returns an array of student objects. */
export async function fetchStudents() {
  const res = await fetch(`${BASE_URL}/students`);
  return handleResponse(res);
}

/** Fetch a single student by numeric id. Returns one student object. */
export async function fetchStudent(id) {
  const res = await fetch(`${BASE_URL}/students/${id}`);
  return handleResponse(res);
}

// ── CREATE ──────────────────────────────────────────────────────────────────

/**
 * Create a new student.
 *
 * @param {{ name, locker_number, age, school_email, passing }} studentData
 * @returns the newly created student object (includes server-assigned id)
 */
export async function createStudent(studentData) {
  const res = await fetch(`${BASE_URL}/students`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(studentData),
  });
  return handleResponse(res);
}

// ── UPDATE ──────────────────────────────────────────────────────────────────

/**
 * Fully replace an existing student record (PUT).
 *
 * @param {number} id         - the student's id
 * @param {{ name, locker_number, age, school_email, passing }} studentData
 * @returns the updated student object
 */
export async function updateStudent(id, studentData) {
  const res = await fetch(`${BASE_URL}/students/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(studentData),
  });
  return handleResponse(res);
}

// ── DELETE ──────────────────────────────────────────────────────────────────

/**
 * Delete a student by id.
 * @returns the server's confirmation message object
 */
export async function deleteStudent(id) {
  const res = await fetch(`${BASE_URL}/students/${id}`, {
    method: "DELETE",
  });
  return handleResponse(res);
}
