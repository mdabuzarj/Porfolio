import React from 'react'
import About from '../components/sections/About'
import Achievements from '../components/sections/Achievements'
import Contact from '../components/sections/Contact'
import Journey from '../components/sections/Journey'
import Hero from '../components/sections/Hero'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'

const Home = () => {
  return (
    <div>
     <Hero />
     <About />
     <Skills />
     <Journey />
     <Projects />
     <Achievements />
     <Contact />
     
    </div>
  )
}

export default Home
