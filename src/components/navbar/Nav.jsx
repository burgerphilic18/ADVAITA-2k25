import React from "react";
import AdvaitaWhite from "../../assets/advaita-white.svg";
import "./Navbar.css"; 


const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="nav-links left"> 
        <a href="#events">EVENTS</a>
        <a href="#sponsors">SPONSORS</a>
      </div>
      <div className="logo"><img src={AdvaitaWhite} alt="Advaita" /></div>
      <div className="nav-links right">
        <a href="#contact">CONTACT</a>
        <a href="#register">REGISTER</a>
      </div>
    </nav>
  );
};

export default Navbar;
