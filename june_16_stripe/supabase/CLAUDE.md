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
npx supabase db execute --file <sql-file>

# Open Supabase Studio (local)
npx supabase start
npx supabase studio
```

## Database Schema

The live schema is documented in `reference/curr_db_schema.sql`. Two tables in the `public` schema:

- **`users`** — `id` UUID PK (FK → `auth.users(id)` ON DELETE CASCADE), `first_name`, `last_name`, `username`, `email`. Row is auto-created by the `on_auth_user_created` trigger from `auth.users` metadata on sign-up. No password column — auth is handled entirely by Supabase Auth.
- **`tasks`** — `id` UUID PK (auto `gen_random_uuid()`), `title`, `description` (nullable), `completed` (bool, default false), `created_at` (default `now()`), `completed_at` (nullable, set when completed), `user_id` FK → `users(id)` ON DELETE CASCADE.

`reference/testing_schema.sql` is the original DrawSQL export used to bootstrap the project. It contains a typo (`last_nam`) and is missing `DEFAULT gen_random_uuid()` / `DEFAULT now()` — both fixed in the deployed schema. Use `curr_db_schema.sql` as the authoritative reference.

## Reference Files

| File | Purpose |
|------|---------|
| `reference/curr_db_schema.sql` | Authoritative deployed schema (read-only context, not runnable as-is) |
| `reference/auth_migration.sql` | Full migration SQL: table DDL, `handle_new_user` trigger, RLS enable + policies |
| `reference/testing_schema.sql` | Original DrawSQL export used to create tables (has known issues, see above) |
| `reference/prompt.md` | Original prompt describing project requirements and workflow |
| `reference/user_journey.md` | Full user journey / feature spec for the front-end app |
| `reference/db_img.webp` | DrawSQL diagram image for visual schema reference |
| `reference/test_data/users_rows.csv` | Seed data for `users` table |
| `reference/test_data/tasks_rows.csv` | Seed data for `tasks` table |

## Application Features (from user journey)

- Auth: combined register/login form (togglable), email + password confirmation on registration
- Home page with app description
- All Tasks page: list sorted by `created_at`, inline create/edit/delete/complete with confirmation on delete
- Pending Tasks and Completed Tasks filtered views (sorted by `created_at`)
- Task detail popup with full CRUD (save, delete, complete)
- Daily completed-task counter (increments when a task is marked complete)
- Contact Us page (email, phone, GitHub, LinkedIn)
- Error boundary page with Home redirect
