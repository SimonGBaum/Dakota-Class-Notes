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
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-5xl space-y-8 ">
        <Heading/>
        <Counter/>
        <PokeSearch/>
      </div>
    </main>
  )
}

export default App
