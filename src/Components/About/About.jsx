import React from 'react'
import './About.css'
import aboutImg from  '../../assets/about.jpg'
import playIcon from  '../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={aboutImg} alt="About Image" className='about-img' />
        <img src={playIcon} alt="Play Icon" className="play-icon" onClick={() => setPlayState(true)} />
      </div>
      <div className="about-right">
        <h3>About Us</h3>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minus vel non quo? Repellat rerum nobis labore perspiciatis, ducimus iste nisi facilis autem quaerat, sequi distinctio quia, quos dolor at.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequatur a modi esse quibusdam soluta rem commodi quos deleniti, accusamus necessitatibus amet, totam consequuntur beatae!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus at dolores animi magnam nulla, eveniet voluptas itaque magni ad qui. Facilis maiores optio adipisci. Impedit.</p>
      </div>
    </div>
  )
}

export default About
