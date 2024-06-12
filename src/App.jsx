import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="container">
       <Title subTitle="Our Programs" title="What we offer" />  
       <Programs/>
      </div>
    </>
  )
}

export default App
