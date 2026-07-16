import Button from "../Button"

export default function PokeForm({handleSubmit, setPokemonName, pokemonName}) {
  return (
    <form onSubmit={(event)=>handleSubmit(event)}>
        <input 
          type="text" 
          name="name" 
          placeholder="pikachu"
          value={pokemonName}
          onChange={(e)=>{setPokemonName(e.target.value)}}
          />
        <Button type="submit">Catch 'em</Button>
    </form>
  )
}