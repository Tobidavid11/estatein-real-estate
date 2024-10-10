import { useState } from 'react';
import "../styles/Navbar.css";
import logo from "../assets/Logo.png";
import menu from "../assets/menu-buger.png";
import close from "../assets/Icon.png";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar-container">
      <span className="logo">
        <img src={logo} alt="Estatein" />
      </span>

      <span className={`pages-link ${isMobileMenuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/properties">Properties</Link></li>
          <li><Link to="/services">Services</Link></li>
         <div className='contact-page'>
         <li><a href="/contact">Contact Us</a></li>
         </div>
        </ul>
      </span>

      <span className="contact-link">
        <a href="/contact">Contact Us</a>
      </span>

      {/* Mobile menu toggle icon */}
      <span className="menu-icon" onClick={toggleMenu}>
        <img src={isMobileMenuOpen ? close : menu} alt="menu" />
      </span>
    </div>
  );
}
