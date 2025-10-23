import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="link">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/tecnologies">TECHNOLOGIES</Link>
        <Link to="/project">PROJECT</Link>
        <Link to="/contact">CONTACT</Link>  
    </div>
  )
}

export default Navbar