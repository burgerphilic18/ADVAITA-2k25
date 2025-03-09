import React from "react";
import './events-home.css';
import Navbar from "../components/navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const EventsHome = () => {
  return (
    <div className="events-home">
      <Navbar />
        <div className="event-text harry-potter-f">
            EVENTS
        </div>
        <div className="second-text">
            SCHEDULE
        </div>
        <div className="download">
            <a className="download-button" href=" " target="_blank" rel="noreferrer">Download Rulebook</a>
        </div>

        <div className="leftVertical">
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
      <div className="rightVertical">
          IIIT BHUBANESWAR, ODISHA

      </div>
    </div>
  );
}

export default EventsHome