// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Services from './pages/Services'
import Notfound from './pages/Notfound'

function App() {
  

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/services' element={<Services />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
