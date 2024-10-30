import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParticleBackground from './components/Particles'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <ParticleBackground/>
      <Navbar/>
      <Hero />
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App