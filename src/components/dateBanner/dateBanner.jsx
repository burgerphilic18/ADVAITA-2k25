import React from 'react';
// import './dateBannerStyles.css';
import bannerLeft from "../../assets/bannerLeft.svg";
import bannerRight from "../../assets/bannerRight.svg";
const DateBanner = () => {
  return (
    <div className="relative w-[90%] max-w-[430px] h-[120px] sm:h-[150px] md:h-[180px] mx-auto rounded-lg border-4 border-[#97804F] shadow-lg 
                     flex flex-col items-center justify-center text-center"style={{background:"radial-gradient(50% 50% at 50% 50%, #004797 0%, #023B7B 40.5%, #012247 98%)"}}>
       
        <div className="text-[#EFB057] text-2xl sm:text-3xl md:text-4xl font-serif mt-1">
          27th March - 30th March
        </div>
        
        
        
        <div className="flex items-center justify-center relative w-full px-6">
          <span className="absolute left-6 md:left-4 text-[#EFB057] text-xl md:text-2xl w-[70px] md:w-[100px]">
            <img src={bannerLeft} alt="◇" />
          </span>
          <div className="text-[#EFB057] text-4xl md:text-6xl font-bold">2025</div>
          <span className="absolute right-6 md:right-4 text-[#EFB057] text-xl md:text-2xl w-[70px] md:w-[100px]">
            <img src={bannerRight} alt="◇" />
          </span>
        </div>
      </div>
    
  );
};

export default DateBanner;