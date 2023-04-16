import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./styles/header.css"

const Header = () => {

  const [isShow, setIsShow] = useState(false)

  const burguerMenu = () =>{
    setIsShow(!isShow)
  }

  return (
    <div className='container__header'>
      <button onClick={burguerMenu} className='burguer'>{isShow ? "x" : <i className='bx bx-menu'></i>}</button>
        <nav>
            <ul className={`navBar ${isShow ? "navBar__active" : ""}`}>
                <li className='item__navbar'><Link onClick={burguerMenu} to={"/"}>Básico</Link></li>
                <li className='item__navbar'><Link onClick={burguerMenu} to={"holaa"}>Intermedio</Link></li>
                <li className='item__navbar'><Link onClick={burguerMenu} to={"/pro"}>Pro</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header