import React from "react";
import "./aboutStyles.css"; 
import SpecialElementR from "../assets/Special-element-right.svg";

const AboutPage = () => {
  return (
    <div id="aboutPage">
      <div className="theme-div">
        <h2 className="harry-potter-f">Theme</h2>
        <p className="pt-serif-regular" >Advaita, the annual techno-cultural fest of IIIT Bhubaneswar, is organized in the last week of March spanning over four days and four nights. Commenced with a motto of providing technocrats all over the country, a platform to showcase their technical skills and talent.</p>
      </div>
      <div className="about-div">
        <div className="about-div-heading">
          <h2 className="pt-serif-regular">About  <span className="harry-potter-f">ADVAITA</span></h2>
          <div className="special-el">
            <img src={SpecialElementR} alt="" />
          </div>
          
        </div>
        <p className="pt-serif-regular">Advaita, the annual techno-cultural fest of IIIT Bhubaneswar, is organized in the last week of March spanning over four days and four nights. Commenced with a motto of providing technocrats all over the country, a platform to showcase their technical skills and talent, Advaita has come a long way over the years since its inception.It is one of the eminent fests in the eastern region of the Indian subcontinent today which has made an impact on several college students across the country.</p>

        
      </div>
      <div className="about-btns pt-serif-regular">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdIFPBV9n2-5WfVE6grv2eYTGcLpT7IKb5vnnJ9Jn94Hbbt-Q/viewform?usp=dialog" target="_blank" rel="noopener noreferrer"><button className="accomodation-btn ">ACCOMODATION</button></a>
        <a href="/RULEBOOK.pdf" target="_blank" rel="noopener noreferrer"><button className="schedule-btn">RULEBOOK</button></a>
        <a href="/Advaita-25 Brochure.pdf" target="_blank" rel="noopener noreferrer"><button className="brochure-btn">BROCHURE</button></a>

        <a href="https://unstop.com/f/PsILQcN?utm_medium=Share&utm_source=shortUrl"><button className="register-btn">REGISTER</button></a>


      </div>

      
      
    </div>
  );
};

export default AboutPage;
