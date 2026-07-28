import './App.css'
import { useEffect } from 'react'
import PokeSearch from './PokeSearch'
import Heading from './Heading'
import Counter from './Counter'

function App() {



  useEffect(
    ()=>{
      console.log("page mounted")
      return ()=>{console.log("page unmounted")}
    },[]
  )



  return (
    <>
      <Heading/>
      <hr/>
      <Counter/>
      <hr/>
      <PokeSearch/>
    </>
  )
}

export default App
