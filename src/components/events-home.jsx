import React from "react";
import './events-home.css';
import Navbar from "../components/navbar";
const EventsHome = () => {
  return (
    <div className="events-home">
      <Navbar />
        <div className="event-text">
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
                    <a rel="noreferrer" target="_blank" href="https://instagram.com/advaita_iiitbh"><img src="" alt="social" /></a>
                    <a rel="noreferrer" target="_blank" href="https://facebook.com/advaita.iiit"><img src="" alt="social" /></a>
                    <a rel="noreferrer" target="_blank" href="https://youtube.com/channel/UCkULTsUj0_Ukm9DWOtin5yw"><img src="" alt="social" /></a>
      </div>
      <div className="rightVertical">
          IIIT BHUBANESWAR, ODISHA
      </div>
    </div>
  );
}

export default EventsHome