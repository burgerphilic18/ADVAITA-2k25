import React from 'react';
import './SponsorsPage.css';
import hat from  "../assets/hat-1.svg";
import ComingSoon from  "../assets/coming-soon.jpeg";
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
        
        <div className="sponsors-row top-sponsors">
          <div className="sponsor-box large">
          <img src="/informatica.svg" alt="Sponsor image" />
          </div>
          <div className="sponsor-box large">
          <img src="/rungta.png" alt="Sponsor image" />
          </div>
          <div className="sponsor-box large">
          <img src="/ocac.png" alt="Sponsor image" />
          </div>
          <div className="sponsor-box large">
          <img src="/indianoil.png" alt="Sponsor image" />
          </div>
        </div>
        
        
        <div className="sponsors-row medium-sponsors">
          <div className="sponsor-box medium">
          <img src="/printlink.png" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/csm.png" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/accveil.png" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/wizertech.png" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/unicops.png" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/pantaloons.png" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/dell.png" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/jindal.png" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/hp.png" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/navbharat.png" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/dalmia.png" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/tata.png" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/union.png" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/dominos.png" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/securosoft.png" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/edevlop.png" alt="Sponsor image" />
          </div>
        </div>
        
        
        <div className="sponsors-row small-sponsors">
          <div className="sponsor-box medium">
          <img src="/nalco.png" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/stpi.png" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/greentrends.png" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/incture.png" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/mcdonalds.png" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/ms.png" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/esquare.png" alt="Sponsor image" />
          </div>
          <div className="sponsor-box medium">
          <img src="/krystal.png" alt="Sponsor image" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SponsorsPage;
