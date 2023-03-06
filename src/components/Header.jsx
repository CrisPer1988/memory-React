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
      <button onClick={burguerMenu} className='burguer'><i class='bx bx-menu'></i></button>
        <nav>
            <ul className={`navBar ${isShow ? "navBar__active" : ""}`}>
                <li><Link to={"/"}>Básico</Link></li>
                <li><Link to={"holaa"}>Intermedio</Link></li>
                <li><Link to={"/pro"}>Pro</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header