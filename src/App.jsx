import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'
import Navbar from './components/layout/Navbar'

const App = () => {
  return (
    <div>
      <Navbar /> 
      <Routes>
        
        <Route path='/' element ={<Home />} />
        <Route path='/resume' element ={<Resume />} />
        <Route path='/projects' element ={<Projects />} />
        <Route path='*' element ={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
