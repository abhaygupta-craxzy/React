import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        React-Routing
      </div>

      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <button className="nav-btn">
        Login
      </button>
    </header>
  )
}

export default Navbar