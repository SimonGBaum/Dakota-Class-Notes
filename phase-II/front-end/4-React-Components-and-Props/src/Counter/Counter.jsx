import { useEffect, useState } from "react"
import Button from "../Button"

export default function Counter() {
    const [count, setCount] = useState(0)

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
      <h3>Total Clicks {count}</h3>
      <Button onClick={ addToCount }>Click me!!</Button>
    </>
  )
}