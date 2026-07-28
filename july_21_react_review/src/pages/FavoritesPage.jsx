import { useOutletContext } from "react-router-dom"
import CharacterCard from "../components/CharacterCard"

const FavoritesPage = () => {
    const { favorites } = useOutletContext()

    return (
        <>
            <h1>Your Favorite Characters:</h1>
            {
            favorites.length > 0 ?
            favorites.map((char,idx)=> (
                <CharacterCard key={idx} character={char}/>
            ))
            :
            "You don't have any favorites"
            }
        </>
    )
}

export default FavoritesPage