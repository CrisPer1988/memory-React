import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/header.css"

const Header = () => {
  return (
    <div className='container__header'>
        <nav>
            <ul className='navBar'>
                <li><Link to={"/"}>Básico</Link></li>
                <li><Link to={"holaa"}>Intermedio</Link></li>
                <li><Link to={"/pro"}>Pro</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header