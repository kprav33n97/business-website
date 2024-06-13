import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="container">
       <Title subTitle="Our Programs" title="What we offer" />  
       <Programs/>
       <About/>
       <Title subTitle="Gallery" title="View our gallery" />  
       <Campus/>
       <Title subTitle="Testimonials" title="What people says" />  
       <Testimonials/>
      </div>
    </>
  )
}

export default App
