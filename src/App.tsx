import { useState } from 'react'
import './App.css'
import Navbar from './componentes/navbar/Navbar'
import Sobre from './pages/sobre/Sobre'
import Home from './pages/home/Home'
import Projetos from './pages/projetos/Projetos'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contato from './pages/contato/Contato'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
          <Route path='/portifolio' element={<Projetos/>}/>
          <Route path='/contato'  element={<Contato/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
