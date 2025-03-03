import React from 'react';
import './SponsorsPage.css';
import hat from  "../assets/hat-1.svg";

const SponsorsPage = () => {
  return (
    <div className="sponsors-page">
      <div className='hat-sponsors'>
        <img src={hat}></img>
      </div>
      <div className="sponsors-header">
        <div className="sponsors-title-container">
          <div className="sponsors-title-decoration">❖</div>
          <h1 className="sponsors-title">SPONSORS</h1>
          <div className="sponsors-title-decoration">❖</div>
        </div>
      </div>
      
      <div className="sponsors-grid">
        {/* Top row - larger sponsors */}
        <div className="sponsors-row top-sponsors">
          <div className="sponsor-box large">
          <img src="/" alt="Sponsor image" />
          </div>
          <div className="sponsor-box large">
          <img src="/" alt="Sponsor image" />
          </div>
        </div>
        
        {/* Middle row - medium sponsors */}
        <div className="sponsors-row medium-sponsors">
          <div className="sponsor-box medium">
          <img src="/" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/" alt="Sponsor image" />
          </div>
        </div>
        
        {/* Bottom row - medium sponsors */}
        <div className="sponsors-row small-sponsors">
          <div className="sponsor-box medium">
          <img src="/" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/" alt="Sponsor image" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SponsorsPage;
