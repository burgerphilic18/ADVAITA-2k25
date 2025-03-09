import React from "react";
import "./HomePageStyle.css"; 
import MainLogo from "../assets/Main-logo.svg";
import DateBanner from "../components/dateBanner/dateBanner";
import Navbar from "../components/navbar/Nav";

const HomePage = () => {
  return (
    <div id="homepage">
      <Navbar />
      <div className="MainLogoDiv">
        <img src={MainLogo} alt="Advaita" />
        
      </div>
      < DateBanner/>

      <div className="vertical-iiit-text">
        IIIT BHUBANESWAR
      </div>
      
    </div>
  );
};

export default HomePage;
