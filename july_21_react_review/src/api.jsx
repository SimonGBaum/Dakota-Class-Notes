import axios from 'axios'

const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api/"
})

// export const getAllCharacters = async() => {
//     /**
//      * its making an async request with axios to r&m api
//      * it should always return an array regardless of success
//      * if successful
//      *  the array should hold a number of objs representing a char
//      */
//     try{
//         let { data } = await api.get("character")
//         return data.results // [{},{},{}]
//     } catch(err) {
//         console.error(err)
//         alert("something went wrong")
//         return []
//     }
// }