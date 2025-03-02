import React, { useState, useEffect } from "react";
import AdvaitaWhite from "../../assets/advaita-white.svg";
import "./Navbar.css"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="navbar">
      {/* Menu Left */}
      <div className={`nav-links left ${menuOpen ? 'active' : ''}`}> 
        <a href="#events">EVENTS</a>
        <a href="#sponsors">SPONSORS</a>
      </div>

      {/* Center Logo */}
      <div className="logo">
        <img src={AdvaitaWhite} alt="Advaita" />
      </div>

      {/* Menu Right */}
      <div className={`nav-links right ${menuOpen ? 'active' : ''}`}>
        <a href="#contact">CONTACT</a>
        <a href="#register">REGISTER</a>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
