import PokeCard from "./PokeCard";


export default function PokeContainer({pokemonList, rmData}) {
  return (
     <div id="container">
        {
          pokemonList.map(
            (pokemon)=>(
              <PokeCard pokemon={pokemon} rmData={rmData}/>
            )
          )
        
        }
      </div>
  )
}
