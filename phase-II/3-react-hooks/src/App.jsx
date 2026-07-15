import axios from 'axios'
import './App.css'
import { useState } from 'react'
function App() {


  // const getPokemonData = (name) =>{
  //   const requestURL = `https://pokeapi.co/api/v2/pokemon/${name}`
  //   axios.get(requestURL)
  //     .then((response)=>{
  //       generateCard(response.data)
  //     })
  //       .catch((err)=>{
  //         console.log(err)
  //         alert("Pokemon Does not Exist")
  //       })
  //         .finally(()=>{
  //           console.log("That's all Folks")
  //         })

  // }

  //      getter,    setter     useState(initial value)
  const [heading, setHeading] = useState("Dakota:Pokemon Project")
  const [count, setCount] = useState(0)
  const [pokemonName, setPokemonName] = useState("")
  const [pokemonList, setPokemonList] = useState([])

  const addToCount=()=>{
    setCount(count + 1)
  }

  const addPokemonData =(data)=>{
    setPokemonList([...pokemonList, data])
  }

  const rmData =(id)=>{
    setPokemonList(pokemonList.filter((pokemon)=>pokemon.id!==id))

  }


  const getPokemonData = async () =>{
    const requestURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    try{
      let response = await axios.get(requestURL)
      console.log(response)
      addPokemonData(response.data)
    }catch(err){
      console.log(err)
      alert("Pokemon Does not Exist")
    }finally{
      console.log("thats all folks")
    }   

  }

  // const generateCard=(data)=>{
  //   let container = document.querySelector("#container")
  //   let div = document.createElement("div")
  //   div.className = "card"
  //   let h3 = document.createElement("h3")
  //   let img = document.createElement("img")
  //   img.src = data["sprites"]["front_shiny"]
  //   h3.innerText=data["name"]
  //   div.appendChild(img)
  //   div.appendChild(h3)
  //   container.appendChild(div)
  // }

  const handleSubmit=(event)=>{
    event.preventDefault()
    getPokemonData()

  }

  return (
    <>
      <h1>{heading}</h1>
      <button onClick={ ()=>{setHeading(heading + " Part 2")} }>Change Title</button>
      <hr/>
      <h3>Total Clicks {count}</h3>
      <button onClick={ addToCount }>Click me!!</button>
      <hr/>
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
      <div id="container">
        {
          pokemonList.map(
            (pokemon)=>(
              <div className="card" key={pokemon.id}>
                <h3>{pokemon.name}</h3>
                <img src={pokemon.sprites.front_shiny} alt={pokemon.name}/>
                <button onClick={()=>rmData(pokemon.id)}>Remove</button>
              </div>
            )
          )
        
        }
      </div>
    </>
  )
}

export default App
