# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture

This is a fullstack project with two independent services:

- `server/` — Python/Flask backend (Python 3.14, virtualenv at `.venv/`)
- `client/` — React 19 + Vite 7 SPA

The two services are developed and run separately; there is no monorepo tooling tying them together.

## Development Commands

### Backend

```bash
source .venv/bin/activate
flask --app server/app.py run
```

### Frontend

```bash
cd client
npm run dev      # dev server with HMR
npm run build    # production build
npm run lint     # ESLint
npm run preview  # preview production build
```

## Notes

- The `.venv` is Python 3.14 and lives at the project root, not inside `server/`.
- `server/app.py` is currently empty — the Flask app needs to be initialized there.
- The frontend is a default Vite + React scaffold; no routing or state management has been added yet.
