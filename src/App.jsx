
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './MainPage/Home'
import About from './MainPage/About'
import Project from './MainPage/Project'
import Technologies from './MainPage/Technologies'
import Contact from './MainPage/Contact'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/tecnologies" element={<Technologies />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

    </>
  )
}

export default App
