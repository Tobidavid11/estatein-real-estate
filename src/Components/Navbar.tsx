import { useState } from 'react';
import "../styles/Navbar.css";
import logo from "../assets/Logo.png";
import menu from "../assets/menu-buger.png";
import close from "../assets/Icon.png";

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
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/properties">Properties</a></li>
          <li><a href="/services">Services</a></li>
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
