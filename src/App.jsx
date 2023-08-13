import './App.css'
import Home from './pages/Home'
import NavBar from './pages/components/nav/NavBar'
import NavNetwork from './pages/components/nav/NavNetwork'
import Gallery from "./pages/Gallery"
import About from './pages/About'
import BackImage from './pages/components/BackImage'

function App() {

  return (
    <>
      <main>
        <NavBar/>
        <Home/>
        <NavNetwork/>
        <Gallery/>
        <About/>
        <BackImage/>
      </main>
    </>
  )
}

export default App;
