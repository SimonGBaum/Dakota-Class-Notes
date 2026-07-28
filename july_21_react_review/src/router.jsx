import { createBrowserRouter } from "react-router-dom"

import HomePage from "./pages/HomePage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"
import CharactersPage from "./pages/CharactersPage.jsx"
import CharacterDetailsPage from "./pages/CharacterDetailsPage.jsx"
import App from "./App.jsx"
import FavoritesPage from "./pages/FavoritesPage.jsx"



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "about/",
                element: <AboutPage />
            },
            {
                path: "characters/",
                element: <CharactersPage />
            },
            {
                path: "characters/:charId/",
                element: <CharacterDetailsPage />
            },
            {
                path: "favorites/",
                element: <FavoritesPage />
            },
            {
                path: "*",
                element: <NotFoundPage />
            }
        ]
    }
])

export default router