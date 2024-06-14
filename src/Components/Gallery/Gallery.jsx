import React from 'react'
import './Gallery.css'
import gallery1 from '../../assets/gallery-1.jpg'
import gallery2 from '../../assets/gallery-2.jpg'
import gallery3 from '../../assets/gallery-3.jpg'
import gallery4 from '../../assets/gallery-4.jpg'
import whiteArrow from '../../assets/white-arrow.png'

const Gallery = () => {
  return (
    <div className='Gallery'>
      <div className="gallery">
        <img src={gallery1} alt="Gallery" />
        <img src={gallery2} alt="Gallery" />
        <img src={gallery3} alt="Gallery" />
        <img src={gallery4} alt="Gallery" />
      </div>
      <button className='btn dark-btn'>See more here <img src={whiteArrow} alt="Arrow icon" /></button>
    </div>
  )
}

export default Gallery
