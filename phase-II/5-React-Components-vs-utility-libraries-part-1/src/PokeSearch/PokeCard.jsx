import { useState } from "react"

export default function PokeCard({pokemon, rmData}) {
  const [shiny, setShiny] = useState(false)

  const imageSource = shiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default
  return (
    <article className="w-72 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md">
        <h3>{pokemon.name}</h3>
        <img
         src={imageSource}
         alt={pokemon.name}
         className="h-48 w-full bg-slate-50 object-contain"

         />
        <div className="flex gap-2">

          <button
          onClick={()=>rmData(pokemon.id)}
          className="rounded-md bg-red-600 px-3 py-2 font-semibold text-white hover:bg-red-700"
          >
          Remove
          </button>
          <button
          onClick={()=>setShiny(!shiny)}
          className="rounded-md bg-amber-400 px-3 py-2 font-semibold text-slate-900 hover:bg-amber-500 "
          >
          {shiny?"Make Dull":"Make Shine"}
          </button>

        </div>


    </article>
  )
}