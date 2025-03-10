import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';
import pro1 from "../assets/pronites1.JPG";
import pro6 from "../assets/pronites6.JPG";

import pro3 from "../assets/pronites3.JPG";

import pro4 from "../assets/pronites4.JPG";
import pro7 from "/asees-kaur.png";
import pro8 from "/nikhil.png";
import pro9 from "/arjun.webp";



function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with middle image active
  const images = [
    { id: 1, src: pro1 },
    { id: 2, src: pro3 },
    { id: 3, src:  pro6  },
    { id: 4, src: pro4 },
    { id: 5, src: pro7 },
    { id: 6, src: pro8},
    { id: 7, src: pro9},
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container">

      <button className="nav-button prev-button flex justify-center items-center " onClick={handlePrev}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <div className="carousel-wrapper !flex !justify-center !items-center">
        <div className="carousel-content !flex !items-center !justify-center ">
          {images.map((image, index) => {
            // Calculate the position relative to current
            const position = (index - currentIndex + images.length) % images.length;
            // Normalize position to be between -2 and 2
            const normalizedPosition = position > 3 ? position - images.length : position;

            return (
              <div
                key={image.id}
                className={`carousel-item active `}
                style={{
                 transform: `translateX(${normalizedPosition * 120}%)`,
                  zIndex: (3 - Math.abs(normalizedPosition)<2?-1000:3)
                }}
                onClick={() => goToSlide(index)}
              >
                <div className="image-placeholder">
                  <img src={image.src} alt={`Slide ${image.id}`} />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <button className="nav-button prev-button flex justify-center items-center" onClick={handleNext}>
      <FontAwesomeIcon icon={faArrowRight} />
      </button>

      
    </div>
  );
}

export default ImageCarousel;
