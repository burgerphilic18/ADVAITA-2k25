import React, { useState, useEffect, useRef } from 'react';
import './Backgroundmusic.css';
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
const BackgroundMusic = ({autoPlay=false,initialMuted=true}) => {
    const [isMuted, setIsMuted] = useState(initialMuted);
    const audioRef = useRef(null);
    const interactionListenerRef = useRef(null);
   

   
    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !audioRef.current.muted;
            setIsMuted(audioRef.current.muted);
        }
    };

  
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5; 
            audioRef.current.loop = true; 
            audioRef.current.muted = initialMuted;
            const playAudio = async ()=>{
                try{
                    
                    await audioRef.current.play();
                      // return () => clearTimeout(stopAudioTimeout);
                }catch(err){
                    console.log(err);
                    const handleUserInteraction = () => {
                        if (audioRef.current){
                        audioRef.current.play().catch(err => console.log(err));
                        
                    }
                    document.removeEventListener("click", handleUserInteraction);
                };
                    interactionListenerRef.current = handleUserInteraction;
                    document.addEventListener("click", handleUserInteraction);    
                }
            };
            if(autoPlay){
                playAudio();
            } 
        }
        return ()=>{

            
            
            if (interactionListenerRef.current) {
                document.removeEventListener("click", interactionListenerRef.current);
            }
    };
},[autoPlay,initialMuted]);

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
