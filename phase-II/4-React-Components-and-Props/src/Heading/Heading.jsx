import { useEffect, useState } from "react"
import styles from './heading.module.css'
import Button from "../Button"

export default function Heading() {
  const [heading, setHeading] = useState("Dakota:Pokemon Project")

  useEffect(()=>{
        console.log("heading changed")
        console.log(heading)
        },[heading]
    )
  
  return (
    <>
      <h1 className={styles.heading}>{heading}</h1>
      <Button onClick={ ()=>{setHeading("Dakota:Pokemon Project Part 2")} }>Change Title</Button>
    </>
  )
}