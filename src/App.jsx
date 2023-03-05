//import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Basico from './components/Basico'
import Header from './components/Header'
import Intermedio from './components/Intermedio'
import Pro from './components/Pro'

function App() {

  return (
    <div>
    <Header />
    <Routes>
      <Route path='/' element={<Basico />} />
      <Route path='/holaa' element={<Intermedio />} />
      <Route path='/pro' element={<Pro />} />
    </Routes>
    </div>
  
)

      
}


export default App
