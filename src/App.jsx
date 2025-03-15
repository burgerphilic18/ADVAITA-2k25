import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Correct imports
import Home from "./Home";
import Events from "./events";
import LandingPage from "./components/LandingPage.jsx";
import BackgroundMusic from "./components/BackgroundMusic.jsx";
import { LoadingProvider } from "./components/LoadingProvider.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import SEO from "./components/SEO.jsx";
import "./sparkles.js";
import "./cursor.css";
/*hi-random comment*/

const App = () => {
  const [musicEnabled, setMusicEnabled] = useState(false);

  return (
    <>
     <SEO 
        title="Advaita IIIT Bhubaneswar - Official Website"
        description="Advaita - The Annual Techno-Cultural Fest of IIIT Bhubaneswar"
        canonical="https://advaita-iiitbh.com"
        keywords="Advaita, IIIT Bhubaneswar, tech fest, cultural fest,advaita iiitbh, advaita 2025, advaita iiit bhubaneswar, advaita iiit bhubaneswar 2025, advaita iiit bhubaneswar 2k25"
      />
    <BrowserRouter> 
      
      <BackgroundMusic autoPlay={musicEnabled} initialMuted={!musicEnabled} />
  
      <Routes>
        <Route path="/" element={<LandingPage setMusicEnabled={setMusicEnabled} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;