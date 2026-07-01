# Task Manager — TDD Feature Exercise

## Overview

You will build a **terminal-based task manager** using Test-Driven
Development. This is not a web app — no UI, no database, no server. Keep
it simple: a terminal program with functions you can call directly and
test directly. The point of this exercise is the TDD workflow, not the
tech stack.

**Language/framework:** use whatever you used for the calculator
exercise (JavaScript + Jest, or Python + pytest) so you can reuse the
same modular, single-responsibility structure — separate your task
logic (pure functions) from any terminal input/output, the same way
`operations.js`/`operations.py` was separated from `cli.js`/`main.py`
in the calculators.

## How to work through this

For **each feature below, in order**:

1. **Red** — write a test that describes the feature's expected
   behavior, using its acceptance criteria. Run it and watch it fail
   (or fail to even run, since the function doesn't exist yet).
2. **Green** — write the *minimum* code necessary to make that test
   pass. Don't build ahead for future features.
3. **Refactor** — clean up duplication or naming in your code or tests
   now that the test is passing, without changing behavior. Re-run
   your tests after every change to confirm they still pass.

Only move to the next feature once the current one is fully green.

## Data model

A task is a plain object/dictionary with:

| Field | Type | Notes |
|---|---|---|
| `id` | number | unique, assigned automatically when a task is created |
| `title` | string | required, non-empty |
| `completed` | boolean | defaults to `false` when created |

Tasks live in memory for this exercise (e.g. an array/list) — no file
or database persistence required.

## Features & acceptance criteria

### 1. Add a task

Given a non-empty title, adding a task creates and returns a new task.

- Adding a task with a valid title returns a task object with that
  title, `completed: false`, and a unique `id`.
- Adding a task with an empty or whitespace-only title raises/throws an
  error and does not create a task.
- Adding two tasks results in two different `id` values.

### 2. List all tasks

Given zero or more existing tasks, listing returns all of them.

- Listing tasks when none have been added returns an empty list.
- Listing tasks after adding several returns all of them, in the order
  they were added.
- Listing tasks does not modify any task's data (read-only).

### 3. Complete a task

Given a task's `id`, marking it complete sets its status.

- Completing a task by a valid `id` sets that task's `completed` field
  to `true`.
- Completing a task by an `id` that doesn't exist raises/throws an
  error and does not affect any existing task.
- Completing an already-completed task does not raise an error (stays
  `true`).

### 4. Delete a task

Given a task's `id`, deleting removes it from the list.

- Deleting a task by a valid `id` removes it, so it no longer appears
  in the list.
- Deleting a task by an `id` that doesn't exist raises/throws an error
  and does not remove any other task.
- Deleting a task does not change the `id` of any remaining task.

### 5. Filter tasks by status

Given the current list of tasks, filtering returns only tasks matching
a completion status.

- Filtering for completed tasks returns only tasks where
  `completed: true`.
- Filtering for incomplete tasks returns only tasks where
  `completed: false`.
- Filtering when no tasks match the given status returns an empty list.

### 6. Update a task's title

Given a task's `id` and a new title, updating changes only that task's
title.

- Updating a task's title with a valid, non-empty new title changes
  `title` and leaves `id` and `completed` unchanged.
- Updating a task's title to an empty or whitespace-only string
  raises/throws an error and leaves the original title unchanged.
- Updating a task by an `id` that doesn't exist raises/throws an error.

## Suggested starting point for the in-class demo

Start with **Feature 1 (Add a task)** as the live, whole-class
walkthrough — it has no dependency on any other feature and its
acceptance criteria map directly onto 2–3 small tests. Features 2–6
follow the same Red-Green-Refactor pattern and build on the task list
created in Feature 1.


