# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **task management application** demo using Supabase as the backend. The project uses the Supabase CLI (installed via npx) to manage a linked remote Supabase project.

- **Supabase project**: `task_manager` (ref: `ampkukwdwqqghnfntvoi`)
- **CLI**: `npx supabase` (Supabase v2.x, installed as a dev dependency)

## Common Commands

```bash
# Run any Supabase CLI command
npx supabase <command>

# Check project link status
npx supabase status

# Execute SQL against the linked remote project
npx supabase db execute --file reference/testing_schema.sql

# Open Supabase Studio (local)
npx supabase start
npx supabase studio
```

## Database Schema

Two tables defined in `reference/testing_schema.sql`:

- **`users`** — UUID PK, first_name, last_nam (typo in source), username, email, password. Note: in Supabase projects, `auth.users` handles authentication; a public `users` table typically stores profile data and references `auth.users(id)`.
- **`tasks`** — UUID PK, title, description (nullable), completed (bool, default false), created_at (auto-now on creation), completed_at (set when completed=true), user_id FK → users(id).

### Schema Notes / Known Issues

- `"last_nam"` in the SQL is a typo — should be `"last_name"`. Confirm with user before applying.
- The `users` table stores a `password` column, which conflicts with Supabase Auth managing credentials. When deploying to Supabase, the `users` table should likely link to `auth.users` via `id` rather than store passwords directly.
- `created_at` and `completed_at` have no `DEFAULT now()` in the export — these should be added so the database populates them automatically.
- Apply tables **one at a time** per `reference/prompt.md`, pausing after each for user verification in the Supabase dashboard.

## Reference Files

| File | Purpose |
|------|---------|
| `reference/prompt.md` | Original prompt describing the project requirements and workflow |
| `reference/user_journey.md` | Full user journey / feature spec for the front-end app |
| `reference/testing_schema.sql` | Exported DrawSQL schema (may need refinement before applying) |
| `reference/db_img.webp` | DrawSQL diagram image for visual schema reference |

## Application Features (from user journey)

- Auth: combined register/login form with email confirmation
- Home page with app description
- All Tasks page: list sorted by created_at, inline create/edit/delete/complete
- Pending Tasks and Completed Tasks filtered views
- Task detail popup with full CRUD
- Daily completed-task counter
- Contact Us page (email, phone, GitHub, LinkedIn)
- Error boundary page with Home redirect
