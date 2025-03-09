import React from "react";
import "./aboutStyles.css"; 
import SpecialElementR from "../assets/Special-element-right.svg";

const AboutPage = () => {
  return (
    <div id="aboutPage">
      <div className="theme-div">
        <h2>Theme</h2>
        <p>Advaita, the annual techno-cultural fest of IIIT Bhubaneswar, is organized in the first week of March spanning over four days and four nights. Commenced with a motto of providing technocrats all over the country, a platform to showcase their technical skills and talent.</p>
      </div>
      <div className="about-div">
        <div className="about-div-heading">
          <h2>About  <span>ADVAITA</span></h2>
          <div className="special-el">
            <img src={SpecialElementR} alt="" />
          </div>
          
        </div>
        <p>Advaita, the annual techno-cultural fest of IIIT Bhubaneswar, is organized in the first week of March spanning over four days and four nights. Commenced with a motto of providing technocrats all over the country, a platform to showcase their technical skills and talent, Advaita has come a long way over the years since its inception.It is one of the eminent fests in the eastern region of the Indian subcontinent today which has made an impact on several college students across the country.</p>

        
      </div>
      <div className="about-btns">
        <a href=""><button className="accomodation-btn">ACCOMODATION</button></a>
        <a href=""><button className="schedule-btn">EVENTS SCHEDULE</button></a>
        <a href="/Advaita-25 Brochure.pdf" target="_blank" rel="noopener noreferrer"><button className="brochure-btn">BROCHURE</button></a>
        <a href="https://unstop.com/f/PsILQcN?utm_medium=Share&utm_source=shortUrl"><button className="register-btn">REGISTER</button></a>

      </div>

      
      
    </div>
  );
};

export default AboutPage;
