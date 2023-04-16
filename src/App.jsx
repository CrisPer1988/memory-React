//import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Basico from './components/Basico'
import Header from './components/Header'
import Intermedio from './components/Intermedio'
import Pro from './components/Pro'
import { useState } from 'react'

function App() {

  const [load, setLoad] = useState(true)

 setTimeout(() => {
  setLoad(false)
 }, 3000);
    if(load) {
      return <div className='container__load'>
        <h2>Bienvenido a mi Memory Game</h2>
        <h3>¿Estas listo?</h3>
        <h6>Creado por Cristian Perez</h6>
      </div>
    }else 
  

  return (
    <div>
    <Header />
    <Routes>
      <Route path='/' element={<Basico />} />
      <Route path='/intermedio' element={<Intermedio />} />
      <Route path='/pro' element={<Pro />} />
    </Routes>
    </div>
  
)

      
}


export default App
