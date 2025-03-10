import React, { useEffect, useRef,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import BackgroundMusic from './BackgroundMusic';

const LandingPage = ({setMusicEnabled}) => {
  const [showVideo, setShowVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const logoRef = useRef(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsLoaded(true);
    gsap.fromTo(logoRef.current, { opacity: 0, scale: 0.5, y: 80 },
         { opacity: 1, scale: 1, y: -40, duration: 1.5, ease: 'power2.out' }
        );
    });
  }, []);

  const handleExploreClick = () => {
    setShowVideo(true);
    setMusicEnabled(true);
    
  };
  const handleSkip =()=>{
    if(videoRef.current){
      videoRef.current.pause();
    videoRef.current.currentTime = 0;
  }
  setShowVideo(false);
  navigate('/home');
  
};
const handleVideoEnd =()=>{
  setShowVideo(false);
  navigate('/home');
}
  return (
    <div className="relative h-screen w-screen flex flex-col items-center">
      <img
        src="/homescreen.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      
      {showVideo && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            onClick={handleSkip}
            className="absolute top-4 right-4 text-white text-lg bg-yellow-500 px-4 py-2 rounded-lg z-50"
          >
            Skip
          </button>
          <video
            ref={videoRef}
            autoPlay
            onEnded={handleVideoEnd}
            className="w-full h-full object-contain"
            muted={false}
          >
            <source
              src={isMobile ? "/mobile-view.mp4" : "/desktop.mp4"}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

     
      <div className="relative z-10 text-center text-white pt-0 md:pt-5 lg:pt-0 mt-34 md:-mt-10 lg:-mt-36">
       <div className='relative'>
       <img
          ref={logoRef}
          src="/advaita.png"
          alt="Harry Potter Logo"
          className= {`mx-auto md:w-xl lg:w-2xl h-auto ${!fontsLoaded ? 'opacity-0' : ''} `}
        />
        <p className="text-xl md:text-2xl lg:text-3xl max-w-md md:max-w-lg lg:max-w-xl mx-auto absolute bottom-0 left-0 right-0 transform translate-y-1/4 px-1 md:px-0 mb-3 pt-serif-regular">
          Join us for an enchanting experience filled with magic, mystery, and adventure. Celebrate the world of Harry Potter like never before!
        </p>
       </div>
        
        
        <div className="flex justify-center mt-16">
          <div onClick={handleExploreClick}  className="px-10 py-3 border-1 border-yellow-400 text-yellow-400 font-semibold rounded-3xl transition duration-300 harry-potter-f cursor-pointer hover:bg-yellow-400 hover:text-black text-4xl">
            Explore
          </div>
        </div>
      </div>
      <BackgroundMusic autoPlay={true} initialMuted={true} />
    </div>
  );
};

export default LandingPage;
