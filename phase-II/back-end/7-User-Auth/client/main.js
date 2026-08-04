import axios from 'axios';

// ===========
//    Auth
// ===========

const loginUser=async()=>{
    let response= await axios.post(
        "http://localhost:8000/api/v1/trainers/login/",
        {
            "email":"kb@kb.com",
            "password":"1234abcd"
        }
    )
    console.log(response.data)
}
// loginUser()
// {
//     email,
//     token
// }

const registerUser = async()=>{
    let response = await axios.post(
        "http://localhost:8000/api/v1/trainers/register/",
        {
            "email":"kb@kb.com",
            "password":"1234abcd"
        }    
    )
    console.log(response.data)    
}    

// registerUser()

const logOutUser = async () =>{
    const response = await axios.post(
        "http://localhost:8000/api/v1/trainers/logout/",
        null,
        {
            headers:{
                Authorization: "Token f6e3f5f2ab4b95ee924c6cec5b2267b3870b4014"
            }
        }
    )
    console.log(response.data)
}
logOutUser()



// ===========
//    CRUD
// ===========
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
            "is_caught":true,
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
// deletePokemon(6)