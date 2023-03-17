

import Header from './components/Header/Header'
import Personajes from './components/Personajes/Personajes'
import { Route, Routes } from 'react-router-dom'
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
