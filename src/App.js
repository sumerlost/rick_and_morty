import './App.css'
import Card from './components/Cartas/Card.jsx'
import Cards from './components/Cartas/Cards.jsx'
import characters, { Rick } from './data.js'
import Header from './components/Header/Header'
import Personajes from './components/Personajes/Personajes'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import Home from './components/Home/Home'
import PersonajeDetail from './components/Personajes/PersonajeDetail'
function App() {


  return (

    <div>
      <Header />
      <Routes>
        <Route path='/personajes' element={<Personajes />} />
        <Route path='/' element={<Home />} />
        <Route path="/personajes/:userId" element={<PersonajeDetail />} />

      </Routes>

    </div>
  )
}

export default App
