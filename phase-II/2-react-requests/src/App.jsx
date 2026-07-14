
import './App.css'
function App() {

  const goodbye="Goodbye!!!!"

  const sayHello=()=>{
    return "Hello from a function" 
  }

  return (
    <>
      <h1 className="heading" >Hello This Is <br /> React</h1>
      <h2 className="heading" style={ {color:"purple", backgroundColor:"goldenrod"} }>This is gonna ...{sayHello()} ...be fun! {goodbye}</h2>
    </>
  )
}

export default App
