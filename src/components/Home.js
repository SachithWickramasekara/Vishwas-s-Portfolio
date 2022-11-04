import React from 'react'
import About from './About'
// import ContactUs from './Contact'
import Contact from './Contactus'
import Footer from './Footer'
import Hero from './Hero'
import Work from './Work'
import Skills from './Skills'
import Newnavbar from './Newnavbar'

const Home = () => {
  return (
    <>
    <Newnavbar/>
    <Hero/>
    <Work/>
    <About/>
    <Skills/>
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default Home