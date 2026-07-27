import axios from 'axios'
import './App.css'
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


  const getPokemonData = async (name) =>{
    const requestURL = `https://pokeapi.co/api/v2/pokemon/${name}`
    try{
      let response = await axios.get(requestURL)
      console.log(response)
      generateCard(response.data)
    }catch(err){
      console.log(err)
      alert("Pokemon Does not Exist")
    }finally{
      console.log("thats all folks")
    }   

  }

  const generateCard=(data)=>{
    let container = document.querySelector("#container")
    let div = document.createElement("div")
    div.className = "card"
    let h3 = document.createElement("h3")
    let img = document.createElement("img")
    img.src = data["sprites"]["front_shiny"]
    h3.innerText=data["name"]
    div.appendChild(img)
    div.appendChild(h3)
    container.appendChild(div)
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
    let data = Object.fromEntries(new FormData(event.target))
    getPokemonData(data['name'])
  }

  return (
    <>
      <h1>Dakota:Pokemon Project</h1>
      <form onSubmit={(event)=>handleSubmit(event)}>
        <input type="text" name="name" placeholder="pikachu"/>
        <input type="submit" value="Search"/>
      </form>
      <div id="container">

      </div>
    </>
  )
}

export default App
