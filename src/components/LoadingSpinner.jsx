import React, { useRef, useEffect } from 'react';

import gsap from 'gsap';
import { useLoading } from './LoadingProvider';

const LoadingSpinner = () => {
  const spinnerRef = useRef(null);
  const wingsRef = useRef(null);
  const { isLoading } = useLoading();
  

  useEffect(() => {
    if (isLoading || navigation.state === 'loading') {
      gsap.fromTo(
        spinnerRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5 }
      );
      
      const wingAnimation = gsap.to(wingsRef.current, {
        rotateY: 360,
        duration: 1.5,
        repeat: -1,
        ease: 'power2.inOut'
      });

      return () => wingAnimation.kill();
    }
  }, [isLoading, navigation.state]);

  if (!isLoading && navigation.state !== 'loading') return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div ref={spinnerRef} className="relative w-48 h-48">
        <img
          ref={wingsRef}
          src="/golden-snitch.png"
          alt="Magical Loading"
          className="absolute w-full h-full animate-float"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="spell-effect animate-spell-glow"></div>
        </div>
        <div className="absolute bottom-0 w-full text-center text-goldenrod font-harry">
          <p className="text-2xl">Preparing Magical Journey...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;