import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img className="logo" src={logo} alt="Logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li><button className='btn'>Get a quote!</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
