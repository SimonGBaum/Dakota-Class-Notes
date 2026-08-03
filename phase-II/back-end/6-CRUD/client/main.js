import axios from 'axios';


const getAllPokemon = async ()=>{
    let response = await axios.get(
        "http://localhost:8000/api/v1/pokemon"
    )
    console.log(response.data)
}
// getAllPokemon()


const getAPokemon = async (idParam)=>{
    let response = await axios.get(
        `http://localhost:8000/api/v1/pokemon/${idParam}/`
    )
    console.log(response.data)
}
// getAPokemon(1)


const updatePokemon = async (idParam)=>{
    let response = await axios.put(
        `http://localhost:8000/api/v1/pokemon/${idParam}/`,
        {
            "is_caught":12345678689,
            "description": "This is a yellow furry lightening ball thing"
        }
    )
    console.log(response.data)
    console.log(response.status)
}
// updatePokemon(1)


const createPokemon=async(data)=>{
    let response = await axios.post(
        `http://localhost:8000/api/v1/pokemon/`,
        data
     
    )
    console.log(response.data)
    console.log(response.status)
}

let data=   {
            "name":"Blastoise",
            "pokemon_type":"Water",
            "is_caught":true
        }
// createPokemon(data)

const deletePokemon = async(idParam)=>{
    let response = await axios.delete(
        `http://localhost:8000/api/v1/pokemon/${idParam}/`
    )
    console.log(response.data)
    console.log(response.status)
}
deletePokemon(6)