import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useOutlet, useOutletContext } from 'react-router-dom';

function CharacterCard({character}) {
  const navigate = useNavigate()
  const { favorites, setFavorites } = useOutletContext()
  const [isFavorite, setIsFavorite] = useState(false)

  const addToFavorites = (charObj) => {
    if (favorites.length < 4){
      setFavorites([...favorites, charObj])
      setIsFavorite(!isFavorite)
    } else {
      alert("You can only have 4 favorites")
    }
  }

  const removeFromFavorites = (charId) => {
    setFavorites(
      favorites.filter((char) =>char.id !== charId)
    )
    setIsFavorite(!isFavorite)
  }

  const evalFavorite = () => {
    let remaining = favorites.filter((char) => (char.id === character.id))
    return remaining.length === 0
  }

  useEffect(()=>{
    setIsFavorite(
      evalFavorite()
    )
  }, [])


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={character.image} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
          <ul>
            <li>STATUS: {character.status}</li>
            <li>SPECIES: {character.species}</li>
          </ul>
        </Card.Text>
        <Button 
          variant="primary"
          onClick={()=> navigate(`/characters/${character.id}`)}        
        >
          SEE DETAILS
        </Button>
        {
         isFavorite ?
          <Button 
            variant='success'
            onClick={()=>addToFavorites(character)}
          >
            Add To Favorites
          </Button>
          :
          <Button 
            variant='danger'
            onClick={()=>removeFromFavorites(character.id)}
          >
            Rm From Favorites
          </Button>
        }
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;