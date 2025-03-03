import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with middle image active
  const images = [
    { id: 1, src: '/' },
    { id: 2, src: '/' },
    { id: 3, src: '/' },
    { id: 4, src: '/' },
    { id: 5, src: '/' }
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
      
      <button className="nav-button prev-button" onClick={handlePrev}>
        &lt;
      </button>
      
      <div className="carousel-wrapper">
        <div className="carousel-content">
          {images.map((image, index) => {
            // Calculate the position relative to current
            const position = (index - currentIndex + images.length) % images.length;
            // Normalize position to be between -2 and 2
            const normalizedPosition = position > 2 ? position - images.length : position;
            
            return (
              <div 
                key={image.id} 
                className={`carousel-item ${normalizedPosition === 0 ? 'active' : ''}`}
                style={{
                  transform: `translateX(${normalizedPosition * 100}%)`,
                  zIndex: 2 - Math.abs(normalizedPosition)
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
      
      <button className="nav-button next-button" onClick={handleNext}>
        &gt;
      </button>
      
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button 
            key={index} 
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
