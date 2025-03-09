import React from "react";
import './events-home.css';
import Navbar from "../components/navbar";
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
        <div className="vertical-text pt-serif-regular">
            IIIT BHUBANESWAR
      </div>
    </div>
  );
}

export default EventsHome