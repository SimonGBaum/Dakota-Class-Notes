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
        <input type="submit" value="Search"/>
    </form>
  )
}