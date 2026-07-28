import './App.css'
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import { useState, useEffect } from "react";


function App() {
  // // getter    setter
  const [favorites, setFavorites] = useState([])

  // // func(act), depndncy[states]
  // useEffect(()=>{
  //   console.log(favorites)
  // }, [ favorites ])

  return (
    <>
      <NavBar />
      <Outlet context={{favorites, setFavorites}} />
    </>
  )
}

export default App
