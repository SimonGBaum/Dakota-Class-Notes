# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a minimal [MkDocs](https://www.mkdocs.org) static documentation site. Content is written in Markdown under `docs/` and configured via `mkdocs.yml`.

## Commands

```bash
# Serve locally with live reload
mkdocs serve

# Build the static site to site/
mkdocs build

# Create a new MkDocs project in a directory
mkdocs new [dir-name]
```

## Structure

- `mkdocs.yml` — site configuration (site name, theme, nav, plugins)
- `docs/` — all Markdown content; `index.md` is the homepage
- `site/` — generated output (do not edit manually; gitignore if not deploying from repo)
