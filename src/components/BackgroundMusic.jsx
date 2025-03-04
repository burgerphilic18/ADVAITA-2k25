import React, { useState, useEffect, useRef } from 'react';
import './BackgroundMusic.css';
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
const BackgroundMusic = () => {
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);

    // Toggle play/pause
    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !audioRef.current.muted;
            setIsMuted(audioRef.current.muted);
        }
    };

  
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5; 
            audioRef.current.loop = false; 
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(()=>{
                console.log("Audio failed to play");
            });
            const stopTimeout = setTimeout(() => {
                if (audioRef.current) {
                    audioRef.current.pause();
                }
            }, 17000); 

            
            return () => clearTimeout(stopTimeout);  
        }
    }, []);

    return (
        <div>
            <audio ref={audioRef} src="/backgroundmusic.mp3" />
            <button onClick={toggleMute}
            className="music-toggle-button"
            aria-label={isMuted ? "Unmute music" : "Mute music"}>
             
                {isMuted ? (<FaVolumeMute className='icon' />) : (<FaVolumeUp className='icon' />)}
            </button>
        </div>
    );
};

export default BackgroundMusic;