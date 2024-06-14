import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/Videoplayer/VideoPlayer'

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="container">
       <Title subTitle="Our Programs" title="What we offer" />
       <Programs/>
       <About setPlayState={setPlayState}/>
       <Title subTitle="Gallery" title="View our gallery" />
       <Gallery/>
       <Title subTitle="Testimonials" title="What people says" />
       <Testimonials/>
       <Title subTitle="Contact Us" title="Get in touch" />
       <Contact/>
       <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </>
  )
}

export default App
