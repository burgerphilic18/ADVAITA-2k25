import React from "react";
import "./HomePageStyle.css"; 
import MainLogo from "../assets/Main-logo.svg";
import Navbar from "../components/navbar/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => {
  return (
    <div id="homepage">
      <div className="leftVertical pt-serif-regular">
              <div>FOLLOW US ON: </div>
                  <a rel="noreferrer" target="_blank" href="https://instagram.com/advaita_iiitbh">
                    <FontAwesomeIcon icon={faInstagram} style={{ color: "#f1ce89" }} className="social-icons"/>
                  </a>
                  <a rel="noreferrer" target="_blank" href="https://facebook.com/advaita.iiit">
                    <FontAwesomeIcon icon={faFacebook} style={{ color: "#f1ce89" }} className="social-icons"/>
                  </a>
                  <a rel="noreferrer" target="_blank" href="https://www.youtube.com/@AdvaitaIIITBhubaneswar">
                    <FontAwesomeIcon icon={faYoutube} style={{ color: "#f1ce89" }} className="social-icons"/>
                  </a>
            </div>
      <div className="rightVertical pt-serif-regular">
          IIIT BHUBANESWAR, ODISHA
      </div>
      <Navbar />
      <div className="MainLogoDiv">
        <img src={MainLogo} alt="Advaita" />
        
      </div>
      <div className="dateBanner">
        <img src="/dateBanner.webp" alt="dateBanner" />
      </div>     

      
      
    </div>
  );
};

export default HomePage;
