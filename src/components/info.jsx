import React from "react";
import "./info.css";

const Info = ({ onGryffindorClick, onHufflepuffClick, onRavenclawClick, onSlytherinClick }) => {
  return (
    <div className="info-box">
      <div className="info-text">
        Refer to the RuleBook above for the team specifications, requirements, format, and more details of all the events in Advaita.
      </div>
      <div className="info-images">
        <div className="image-container" onClick={onGryffindorClick}>
          <img className="info-image" src="/house1.png" alt="houses" />
          <div className="image-text">TECHNICAL EVENTS</div>
        </div>
        <div className="image-container" onClick={onHufflepuffClick}>
          <img className="info-image" src="/house2.png" alt="houses" />
          <div className="image-text">CULTURAL & FILM THEATRE EVENTS</div>
        </div>
        <div className="image-container" onClick={onRavenclawClick}>
          <img className="info-image" src="/house4.png" alt="houses" />
          <div className="image-text">ART & PHOTOGRAPHY EVENTS</div>
        </div>
        <div className="image-container" onClick={onSlytherinClick}>
          <img className="info-image" src="/house3.png" alt="houses" />
          <div className="image-text">SPORTS & FOOD SOCIAL CONNECT EVENTS</div>
        </div>
      </div>
    </div>
  );
};

export default Info;