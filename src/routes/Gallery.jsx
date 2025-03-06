import React from 'react';
import './Gallery.css';
import pngWing from "../assets/pngwing.com.svg";
import img2 from "../assets/galleryimg2.JPG";
import img4 from "../assets/galleryimg1.JPG";
import img1 from "../assets/galleryimg4.JPG";
import img5 from "../assets/galleryimg5.JPG";
import img3 from "../assets/galleryimg3.JPG";
import img6 from "../assets/galleryimg6.JPG";

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
        <div className="gallery-item left">
          <img src={img1} alt="Gallery image 1" />
        </div>        
        <div className="gallery-item center-top">
          <img src={img2} alt="Gallery image 2" />
        </div>
        
        <div className="gallery-item top-right">
          <img src={img3} alt="Gallery image 3" />
        </div>
        <div className="gallery-item bottom-right">
          <img src={img4} alt="Gallery image 4" />
        </div>
        
        <div className="gallery-item center-bottom-1">
          <img src={img5} alt="Gallery image 5" />
        </div>
        <div className="gallery-item center-bottom-2">
          <img src={img6} alt="Gallery image 6" />
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