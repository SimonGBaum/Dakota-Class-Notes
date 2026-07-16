
export default function PokeCard({pokemon, rmData}) {
  return (
    <div className="card" key={pokemon.id}>
        <h3>{pokemon.name}</h3>
        <img src={pokemon.sprites.front_shiny} alt={pokemon.name}/>
        <button onClick={()=>rmData(pokemon.id)}>Remove</button>
    </div>
  )
}