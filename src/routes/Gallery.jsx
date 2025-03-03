import React from 'react';
import './Gallery.css';
import pngWing from "../assets/pngwing.com.svg";


const Gallery = () => {
  return (
    <div className="gallery-container">
      
      {/* Header with logo and banners */}
      <header className="gallery-header">
        <div className="logo-container">
          <div className="logo-diamond"></div>
          <h1 className="gallery-title">Gallery</h1>
        </div>
        <div className="Gallerybanners">
          <img src={pngWing}/>
        </div>
      </header>

      {/* Main gallery grid */}
      <div className="gallery-grid">
        {/* Left tall image */}
        <div className="gallery-item tall-left">
          <img src="/" alt="Gallery image" />
        </div>
        
        {/* Top center image */}
        <div className="gallery-item center-top">
          <img src="/" alt="Gallery image" />
        </div>
        
        {/* Right small image */}
        <div className="gallery-item small-right">
          <img src="/" alt="Gallery image" />
        </div>
        
        {/* Bottom wide image */}
        <div className="gallery-item wide-bottom">
          <img src="/" alt="Gallery image" />
        </div>
        
        {/* Full width image at bottom */}
        <div className="gallery-item full-width">
          <img src="/" alt="Gallery image" />
        </div>
      </div>

      {/* Footer with buttons */}
      <div className="gallery-footer">
        <button className="gallery-button view-more">VIEW MORE</button>
        <button className="gallery-button brochure">BROCHURE</button>
      </div>
    </div>
  );
};

export default Gallery;