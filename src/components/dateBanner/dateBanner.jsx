import React from 'react';
import './dateBannerStyles.css';

const DateBanner = () => {
  return (
    <div className="date-banner">
      <div className="banner-content">
        <div className="date-range">
          27th March - 1st April
        </div>
        
        
        
        <div className="year-container">
          <span className="diamond left">◇</span>
          <div className="year">2025</div>
          <span className="diamond right">◇</span>
        </div>
      </div>
    </div>
  );
};

export default DateBanner;