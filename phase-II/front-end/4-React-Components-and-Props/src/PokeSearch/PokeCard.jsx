import { useState } from "react"
import Button from "../Button"

export default function PokeCard({pokemon, rmData}) {
  const [shiny, setShiny] = useState(false)
  
  return (
    <div className="card">
        <h3>{pokemon.name}</h3>
        <img src={shiny ?pokemon.sprites.front_shiny :pokemon.sprites.front_default} alt={pokemon.name}/>
        <Button onClick={()=>rmData(pokemon.id)}>Remove</Button>
        <Button onClick={()=>setShiny(!shiny)}>{shiny?"Make Dull":"Make Shine"}</Button>

    </div>
  )
}