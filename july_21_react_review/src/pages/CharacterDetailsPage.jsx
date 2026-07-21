import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from 'axios'

function CharacterDetailsPage() {
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const { charId } = useParams() 

  const grabACharacter = async() => {
    try{
      let { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/${charId}`
      )
      return data
    } catch(err){
      console.log(err)
      return null
    }
  }

  useEffect(()=>{
    const setVal = async() => setSelectedCharacter(await grabACharacter())
    setVal()
  }, [charId])
  

  return (
    <>
    { selectedCharacter &&
      <Card>
        <Card.Img variant="top" src={selectedCharacter.image} />
        <Card.Body>
          <Card.Text>
            <ul>
              <li>NAME: {selectedCharacter.name}</li>
              <li>ORIGIN: {selectedCharacter.origin.name}</li>
              <li>LOCATION: {selectedCharacter.location.name}</li>
              <li>CREATED: {selectedCharacter.created}</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    }
    </>
  );
}

export default CharacterDetailsPage;