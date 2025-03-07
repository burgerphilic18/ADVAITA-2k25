import React, { useState, useEffect } from "react";
import AdvaitaWhite from "/advaita-white.svg";
// import "./navbar.css"; 


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarOpacity, setNavbarOpacity] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setNavbarOpacity(false); // Hide navbar when scrolling down
      } else {
        setNavbarOpacity(true); // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    },[lastScrollY]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="navbar" style={{opacity: navbarOpacity}} className="fixed top-0 w-full z-50 transition-all duration-300 py-2 px-4 md:px-10 bg-transparent text-white flex justify-between  items-center">
      {/* Menu Left */}
      <div className="hidden md:flex items-center gap-[4vw] lg:gap-[5vw] xl:gap-[6vw] flex-1 justify-end "> 
        <a href="/" className="text-xl lg:text-2xl xl:text-3xl hover:opacity-80 transition-opacity">HOME</a>
        <a href="#sponsors"className="text-xl lg:text-2xl xl:text-3xl hover:opacity-80 transition-opacity">SPONSORS</a>
        <a href="#contact"className="text-xl lg:text-2xl xl:text-3xl hover:opacity-80 transition-opacity">CONTACT</a>
      </div>

      {/* Center Logo */}
      <div className="flex items-center justify-center flex-1 nav-logo1">
        <img src={AdvaitaWhite} alt="Advaita"className="max-w-[120px] md:max-w-[140px] lg:max-w-[180px] transition-all duration-300" />
      </div>

      {/* Menu Right */}
      <div className="hidden md:flex items-center gap-[4vw] lg:gap-[5vw] xl:gap-[6vw] flex-1 justify-start ">
        <a href="/"className="text-xl lg:text-2xl xl:text-3xl hover:opacity-80 transition-opacity">MERCH</a>
        <a href="/"className="text-xl lg:text-2xl xl:text-3xl hover:opacity-80 transition-opacity">PASSES</a>
        <a href="#register"className="text-xl lg:text-2xl xl:text-3xl hover:opacity-80 transition-opacity">REGISTER</a>
      </div>

      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#0b1720] bg-opacity-95 flex flex-col justify-center items-center gap-10 transition-transform duration-400 z-40 
        ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <a href="/" className="text-2xl hover:opacity-80 transition-opacity">HOME</a>
        <a href="#sponsors" className="text-2xl hover:opacity-80 transition-opacity">SPONSORS</a>
        <a href="#contact" className="text-2xl hover:opacity-80 transition-opacity">CONTACT</a>
        <a href="/" className="text-2xl hover:opacity-80 transition-opacity">MERCH</a>
        <a href="/" className="text-2xl hover:opacity-80 transition-opacity">PASSES</a>
        <a href="#register" className="text-2xl hover:opacity-80 transition-opacity">REGISTER</a>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden relative z-50 flex items-center   ">
      <button onClick={toggleMenu} className="focus:outline-none">
      <div className="w-8 h-6 flex flex-col justify-between  mr-4 menuBar">
            <span className={`h-0.5 w-full bg-[#F1CE89] transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`h-0.5 w-full bg-[#F1CE89] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`h-0.5 w-full bg-[#F1CE89] transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
      </button>
      </div>
    </nav>
  );
};

export default Navbar;