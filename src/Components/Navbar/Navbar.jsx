import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-scroll'
import menuIcon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll',
      ()=> {
        window.scrollY > 500 ? setSticky(true): setSticky(false);
      }
    )
  }, [])


  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () => {
   mobileMenu? setMobileMenu(false): setMobileMenu(true);
  }

  
  return (
    <nav className={`container ${sticky?'dark-nav':''} `}>
      <img className="logo" src={logo} alt="Logo" /> 
      <ul className={mobileMenu?"":'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500}>Services</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='Gallery' smooth={true} offset={-260} duration={500}>Portfolio</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link className='btn' to='contact' smooth={true} offset={-260} duration={500}>Get a quote!</Link></li>
      </ul>
      <img src={menuIcon} alt="Menu icon" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
