import React from "react";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import Home from "./Home";
import Events from "./events";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import BackgroundMusic from "./components/BackgroundMusic.jsx";
import {useState} from 'react';
import "./sparkles.js";
import "./cursor.css";

const App = () => {
  const [musicEnabled, setMusicEnabled] = useState(false);
  return (
    <>
    <BackgroundMusic autoPlay={musicEnabled} initialMuted={!musicEnabled} />
      <Routes>
        <Route path="/" element={<LandingPage setMusicEnabled={setMusicEnabled} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
};

export default App;