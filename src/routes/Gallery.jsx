import React, { useState, useEffect } from 'react';
import './Gallery.css';
import pngWing from "../assets/pngwing.com.svg";

import banner1 from "../assets/banner1.JPG";
import banner2 from "../assets/banner2.JPG";
import banner3 from "../assets/banner3.JPG";
import banner4 from "../assets/banner4.JPG";
import banner5 from "../assets/banner5.JPG";
import banner6 from "../assets/banner6.JPG";
import banner7 from "../assets/banner7.JPG";
import img1 from "../assets/gimg1.JPG";
import img2 from "../assets/gimg2.JPG";
import img3 from "../assets/gimg3.JPG";
import img4 from "../assets/gimg4.JPG";
import img5 from "../assets/gimg5.JPG";

import img7 from "../assets/gimg7.JPG";
import img8 from "../assets/gimg8.JPG";
import img9 from "../assets/gimg9.JPG";

import sq1 from "../assets/square1.JPG";
import sq2 from "../assets/square2.JPG";
import sq3 from "../assets/square3.JPG";
import sq4 from "../assets/square4.JPG";
import sq5 from "../assets/square5.JPG";
import sq6 from "../assets/square6.JPG";
import sq7 from "../assets/square7.JPG";
import sq8 from "../assets/square8.JPG";
import sq9 from "../assets/square9.JPG";
import sq10 from "../assets/square10.JPG";
import sq11 from "../assets/square11.JPG";

const galleryImages = {
  left:[sq5, sq10, sq6], 
  centerTop: [banner5, banner1, img4 , banner4 ],
  topRight: [banner7, banner6, banner3,banner2,img3],
  bottomRight: [sq1, sq2, sq3,sq7, sq8,sq11],
  centerBottom1: [img1,img2,img3,img5],
  centerBottom2: [ img7,img8,img9,sq9, sq4]
};


const ImageSlideshow = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow-container">
      {images.map((img, index) => (
        <img 
          key={index}
          src={img} 
          alt={`${alt} ${index + 1}`}
          className={`slideshow-image ${index === currentIndex ? 'active' : 'inactive'}`}
        />
      ))}
    </div>
  );
};

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
          <img src={pngWing} alt="Decorative banner" />
        </div>
      </header>

      {/* Main gallery grid */}
      <div className="gallery-grid">
        <div className="gallery-item left">
          <ImageSlideshow 
            images={galleryImages.left} 
            alt="Gallery slideshow 1" 
          />
        </div>        
        <div className="gallery-item center-top">
          <ImageSlideshow 
            images={galleryImages.centerTop} 
            alt="Gallery slideshow 2" 
          />
        </div>
        
        <div className="gallery-item top-right">
          <ImageSlideshow 
            images={galleryImages.topRight} 
            alt="Gallery slideshow 3" 
          />
        </div>
        <div className="gallery-item bottom-right">
          <ImageSlideshow 
            images={galleryImages.bottomRight} 
            alt="Gallery slideshow 4" 
          />
        </div>
        
        <div className="gallery-item center-bottom-1">
          <ImageSlideshow 
            images={galleryImages.centerBottom1} 
            alt="Gallery slideshow 5" 
          />
        </div>
        <div className="gallery-item center-bottom-2">
          <ImageSlideshow 
            images={galleryImages.centerBottom2} 
            alt="Gallery slideshow 6" 
          />
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