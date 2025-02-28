import React from 'react';
import './VerticalText.css';

const VerticalText = () => {
  // Split into individual characters to stack them
  const letters = "IIIT BHUBANESWAR".split('');
  
  return (
    <div className="vertical-text-container">
      {/* Your main content would go here */}
      
      <div className="vertical-text">
        {letters.map((letter, index) => (
          <div key={index} className="letter">
            {letter === ' ' ? <div className="spacer"></div> : letter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalText;