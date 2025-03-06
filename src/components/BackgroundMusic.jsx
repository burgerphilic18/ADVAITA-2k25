import React, { useState, useEffect, useRef } from 'react';
import './Backgroundmusic.css';
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
const BackgroundMusic = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
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
            audioRef.current.muted = true;
            const playAudio = async ()=>{
                try{
                    await audioRef.current.play();
                    // const stopAudioTimeout = 
                    setTimeout(() => {
                        if (audioRef.current) {
                            audioRef.current.pause();
                            console.log("Audio stopped after 25 seconds");
                        }
                    }, 25000);

                    // return () => clearTimeout(stopAudioTimeout);
                }catch(err){
                    console.log(err);
                    const handleUserInteraction = () => {
                        audioRef.current.play();
                        document.removeEventListener("click", handleUserInteraction);
                    };
                    document.addEventListener("click", handleUserInteraction);    
                }
            };
            
           
            playAudio();
        }
},[]);

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
