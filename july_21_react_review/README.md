# Rick and Morty React — Full Assignment Requirements

## Part I — Project Setup
- Vite + React dev environment
- Files: `HomePage.jsx`, `App.jsx`, `router.jsx`
- React Browser Router connected to `App.jsx`
- `HomePage.jsx` renders an "Attention Getter" promoting the show at `http://127.0.0.1:5173/`

## Part II — Pages, Routing, Styling, Testing
- `AboutPage.jsx` — general info about the show (consider pulling from an API)
- `CharactersPage.jsx` — Bootstrap Card component per character from the [Rick and Morty API](https://rickandmortyapi.com/) (likely `useState`, `useEffect`, `axios`, `async`, `map`, conditional rendering)
- Routes for every page above, added to React Browser Router
- `NotFound.jsx` — error message for invalid routes, wired to an error route
- `NavBar.jsx` — navigation across the project
- Cypress tests confirming all requirements are met
- Styling via React Bootstrap or Tailwind CSS

**⚠️ Pagination warning:** The API returns results in pages, not all at once. Each list response includes an `info` object:
```json
{
  "info": {
    "count": 826,
    "pages": 42,
    "next": "https://rickandmortyapi.com/api/character?page=2",
    "prev": null
  },
  "results": []
}
```
- `count` = total items across all pages
- `pages` = total number of pages
- `next` / `prev` = URLs for adjacent pages (or `null`)
- Actual data lives in `results`
- Don't assume one request returns everything — use `next`/`prev`/`page` to fetch additional pages as needed.

## Part III — Character Details & Navigation
- `CharacterDetailsPage.jsx` — shows full info for a single character (use `useParams`)
- Dynamic route rendering `CharacterDetailsPage.jsx`
- Implement `useNavigate` functionality somewhere in the app

## Part IV — Favorites
- `FavoriteCharactersPage.jsx` — displays user's favorited characters
- Route rendering it as a child of `App.jsx`
- Users can add/remove favorites, capped at **4 favorites max**
- Styling via React Bootstrap **and** Tailwind CSS
- Cypress test suite covering all Part IV requirements