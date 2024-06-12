import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll',
      ()=> {
        window.scrollY > 500 ? setSticky(true): setSticky(false);
      }
    )
  }, [])

  
  return (
    <nav className={`container ${sticky?'dark-nav':''} `}>
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
