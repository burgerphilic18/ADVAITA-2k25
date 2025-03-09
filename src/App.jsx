import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Correct imports
import Home from "./Home";
import Events from "./events";
import LandingPage from "./components/LandingPage.jsx";
import BackgroundMusic from "./components/BackgroundMusic.jsx";
import { LoadingProvider } from "./components/LoadingProvider.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import "./sparkles.js";
import "./cursor.css";

const App = () => {
  const [musicEnabled, setMusicEnabled] = useState(false);

  return (
    
 <BrowserRouter> 
      
      <BackgroundMusic autoPlay={musicEnabled} initialMuted={!musicEnabled} />
  
      <Routes>
        <Route path="/" element={<LandingPage setMusicEnabled={setMusicEnabled} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  
   
  );
};

export default App;