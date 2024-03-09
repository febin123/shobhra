import About from "./components/About"
import Dishes from "./components/Dishes"
import Home from "./components/Home"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <div>
      <Navbar/>

      <main>
      <div id="home">
          <Home/>
      </div>

      <div id="dishes">
          <Dishes/>
      </div>

      <div id="about">
          <About/>
        </div>


      </main>
    </div>
  )
}

export default App
