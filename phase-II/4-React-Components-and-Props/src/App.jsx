import './App.css'
import { useState, useEffect } from 'react'
import PokeSearch from './PokeSearch'
function App() {

  const [heading, setHeading] = useState("Dakota:Pokemon Project")
  const [count, setCount] = useState(0)

  useEffect(
    ()=>{
      console.log("page mounted")
      return ()=>{console.log("page unmounted")}
    },[]
  )

  useEffect(()=>{
    console.log("heading changed")
    console.log(heading)
    },[heading]
  )

  useEffect(
    ()=>{
      console.log("count changed")
      const colors = ["lightblue","lightgreen","lightpink","lightyellow","lightseagreen","lightsalmon"]
      const randomIndex = Math.floor(Math.random()*colors.length)
      document.body.style.backgroundColor = colors[randomIndex]
    },
    [count]
  )

  const addToCount=()=>{
    setCount(count + 1)
  }

  return (
    <>
      <h1>{heading}</h1>
      <button onClick={ ()=>{setHeading("Dakota:Pokemon Project Part 2")} }>Change Title</button>
      <hr/>
      <h3>Total Clicks {count}</h3>
      <button onClick={ addToCount }>Click me!!</button>
      <hr/>
      <PokeSearch/>
    </>
  )
}

export default App
