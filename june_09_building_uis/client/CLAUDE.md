# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server (HMR enabled)
npm run build     # Production build → dist/
npm run preview   # Serve production build locally
npm run lint      # ESLint across all files
```

## Architecture

React 19 + Vite SPA. Entry point: `index.html` → `src/main.jsx` → `src/App.jsx`.

**React Router 7** is installed but not yet wired up — add routes in `src/App.jsx` via `createBrowserRouter` or `<BrowserRouter>`.

**Styling** uses plain CSS files co-located with components (`App.css` next to `App.jsx`). Global resets and CSS custom properties live in `src/index.css`.

**ESLint** is configured with flat config (`eslint.config.js`). Unused-var rule ignores uppercase identifiers (`^[A-Z_]`). React Hooks and React Refresh rules are enabled.

No state management library, context providers, or API layer exists yet — the project is a starter template ready to be extended.
