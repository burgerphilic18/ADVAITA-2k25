import React from 'react';
// import './dateBannerStyles.css';

const DateBanner = () => {
  return (
    <div className="relative w-[90%] max-w-[430px] h-[120px] sm:h-[150px] md:h-[180px] mx-auto rounded-lg border-4 border-[#97804F] shadow-lg 
                     flex flex-col items-center justify-center text-center"style={{background:"radial-gradient(50% 50% at 50% 50%, #004797 0%, #023B7B 40.5%, #012247 98%)"}}>
       
        <div className="text-[#EFB057] text-2xl sm:text-3xl md:text-4xl font-serif mt-1">
          27th March - 1st April
        </div>
        
        
        
        <div className="flex items-center justify-center relative w-full px-6">
          <span className="absolute left-6 md:left-16 text-[#EFB057] text-xl md:text-2xl">◇</span>
          <div className="text-[#EFB057] text-4xl md:text-6xl font-bold">2025</div>
          <span className="absolute right-6 md:right-16 text-[#EFB057] text-xl md:text-2xl">◇</span>
        </div>
      </div>
    
  );
};

export default DateBanner;