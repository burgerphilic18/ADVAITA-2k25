import React from "react";
import "./HomePageStyle.css"; 
import MainLogo from "../assets/Main-logo.svg";
import Navbar from "../components/navbar/Nav";

const HomePage = () => {
  return (
    <div id="homepage">
      <div className="leftVertical">
                    <div>FOLLOW US ON: </div>
                    <a rel="noreferrer" target="_blank" href="https://instagram.com/advaita_iiitbh"><img src="" alt="social" /></a>
                    <a rel="noreferrer" target="_blank" href="https://facebook.com/advaita.iiit"><img src="" alt="social" /></a>
                    <a rel="noreferrer" target="_blank" href="https://youtube.com/channel/UCkULTsUj0_Ukm9DWOtin5yw"><img src="" alt="social" /></a>
      </div>
      <div className="rightVertical">
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
