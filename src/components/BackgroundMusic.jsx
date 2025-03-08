import React, { useState, useEffect, useRef } from 'react';
import './Backgroundmusic.css';
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const BackgroundMusic = ({autoPlay=true,initialMuted=false}) => {
    const [isMuted, setIsMuted] = useState(initialMuted);
    const audioRef = useRef(null);
    // const interactionListenerRef = useRef(null);
//  useEffect(()=>{
//     setIsMuted(initialMuted);
//  },[initialMuted]);

 useEffect(()=>{
    if(audioRef.current){
        audioRef.current.muted = isMuted;
    }
        
 },[isMuted])  
    // const toggleMute = () => {
    //     if (audioRef.current) {
    //         audioRef.current.muted = !audioRef.current.muted;
    //         setIsMuted(audioRef.current.muted);
    //     }
    // };
    const toggleMute = () => {
        setIsMuted(prev => !prev);
    };

  
    useEffect(() => {
        const audioElement = audioRef.current;
        if (!audioElement) return;
        audioElement.volume = 0.5; 
        audioElement.loop = true; 
        audioElement.muted = isMuted;
       
            // audioRef.current.muted = initialMuted;
            
            const playAudio = async ()=>{
                try{
                    
                    await audioElement.play();
                    console.log("Audio playback started successfully.");
                      // return () => clearTimeout(stopAudioTimeout);
                }catch(err){
                    console.error("Autoplay failed:", err);
                    if (err.name === "NotAllowedError") {
                        console.error("Autoplay was blocked by the browser.");
                      } else if (err.name === "NotFoundError") {
                        console.error("Audio file not found or invalid path.");
                      }
                    const handleInteraction = () => {
                        // if (audioRef.current){
                        // audioRef.current.play().catch(err => console.log(err));
                        audioElement.play().then(()=>console.log('Playback started after user interaction.'))
                        .catch((err)=> console.error("Failed to play audio:", err));
                        document.removeEventListener('click', handleInteraction);
                        
                    };
                    document.addEventListener('click', handleInteraction);
                    // document.removeEventListener("click", handleUserInteraction);
                
                    // interactionListenerRef.current = handleUserInteraction;
                    
                    return()=>
                        {document.removeEventListener("click", handleInteraction);    
                };
            }
            };
            if(autoPlay){
                playAudio();
            } 
            return () => {
                if (audioElement) {
                    audioElement.pause();
                    audioElement.currentTime = 0;
                }
            };
            
        },[autoPlay,isMuted]);

//         return ()=>{

            
            
//             if (interactionListenerRef.current) {
//                 document.removeEventListener("click", interactionListenerRef.current);
//             }
//     };
// },[autoPlay,initialMuted]);

    return (
        <div>
            <audio ref={audioRef} src="/backgroundmusic.mp3" />
            <button onClick={toggleMute}
            className="music-toggle-button"
            aria-label={isMuted ? "Unmute music" : "Mute music"}
            >
             
                {isMuted ? (<FaVolumeMute className='icon' />) : (<FaVolumeUp className='icon' />)}
            </button>
        </div>
    );
};

export default BackgroundMusic;
