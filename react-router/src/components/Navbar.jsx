// import React from 'react'
import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
       <nav style={{backgroundColor:'lightblue', padding:'10px'}}>
         <ul>
           <li><Link to="/" style={{margin: "10px"}}>Home</Link></li>
           <li><Link to="/about" style={{margin: "10px"}}>About</Link></li>
           <li><Link to="/contact" style={{margin: "10px"}}>Contact</Link></li>
           <li><Link to="/services" style={{margin: "10px"}}>Services</Link></li>
         </ul>
       </nav>
    </div>
  )
}

export default Navbar
