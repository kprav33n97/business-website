import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We ensure best solutions for every business!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minus maxime corporis dicta earum et iste ipsam harum, veniam hic dolores nihil.</p>
        <button className="btn">Explore more <img src={arrow} alt="Arrow symbol" /></button>
      </div>
    </div>
  )
}

export default Hero
