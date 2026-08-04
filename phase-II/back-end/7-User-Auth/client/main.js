import axios from 'axios';

// ===========
//    Auth
// ===========

<<<<<<< HEAD
// ==============  
//     Auth
// ==============  

const loginUser=async()=>{
    let response = await axios.post(
        "http://localhost:8000/api/v1/trainers/login/",
        {
            "email": "simon.b.baum.com",
            "password": "1234qwer"
=======
const loginUser=async()=>{
    let response= await axios.post(
        "http://localhost:8000/api/v1/trainers/login/",
        {
            "email":"kb@kb.com",
            "password":"1234abcd"
>>>>>>> 99357be788f5948066768fcbeae4b559b9ed07c4
        }
    )
    console.log(response.data)
}


<<<<<<< HEAD
const registerUser = async() => {
    let response = await axios.post(
        "http://localhost:8000/api/v1/trainers/",
        {
            "email": "simon.b.baum.com",
            "password": "1234qwer"
        }
    )
}




// ==============  
//     CRUD
// ==============    
=======
const registerUser = async()=>{
    let response = await axios.post(
        "http://localhost:8000/api/v1/trainers/register/",
        {
            "email":"kb@kb.com",
            "password":"1234abcd"
        }
    )
}
// loginUser()
// {
//     email,
//     token
// }


// ===========
//    CRUD
// ===========
>>>>>>> 99357be788f5948066768fcbeae4b559b9ed07c4
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