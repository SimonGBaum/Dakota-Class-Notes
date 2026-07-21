import axios from "axios";

import CharacterCard from "../components/CharacterCard";

import { useEffect, useState } from 'react'

function CharactersPage() {
  const [nextUrl, setNextUrl] = useState(null)
  const [prevUrl, setPrevUrl] = useState(null)
  const [currUrl, setCurrUrl] = useState('https://rickandmortyapi.com/api/character')
  const [characters, setCharacters] = useState([]) // [{},{},{}]||[]

  const getAllCharacters = async() => {
    /**
     * its making an async request with axios to r&m api
     * it should always return an array regardless of success
     * if successful
     *  the array should hold a number of objs representing a char
     */
    try{
        let { data } = await axios.get(currUrl)
        let {info} = data
        setNextUrl(info.next)
        setPrevUrl(info.prev)
        return data.results // [{},{},{}]
    } catch(err) {
        console.error(err)
        alert("something went wrong")
        return []
    }
  }

  /**
   * upon the Page mounting
   * we want to grab ALL characters
   * update the value of `characters`
   * render the `characters` to the user
   */
  useEffect(()=> {
    const setVals = async() => setCharacters(await getAllCharacters())
    setVals()
  }, [ currUrl ])

  return (
    <>
      <h2>Characters Page</h2>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <button
         disabled={prevUrl === null}
         onClick={()=> setCurrUrl(prevUrl)}
        >
          PREV
        </button>
        <button
         disabled={nextUrl === null}
         onClick={()=> setCurrUrl(nextUrl)}
        >
          NEXT
        </button>
      </div>
      <div style={{ display:'flex', flexWrap:'wrap', gap:'2vmin'}}>
        {characters.map((char)=> (
          <CharacterCard 
            key={char.id} 
            character={char} 
          />
        ))}
      </div>
    </>
  );
}

export default CharactersPage;