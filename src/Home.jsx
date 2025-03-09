
import React from "react";
import AboutPage from "./routes/about";
import HomePage from "./routes/HomePage";
import StatsPage from "./routes/stats";
import Gallery from './routes/Gallery';
import SponsorsPage from './routes/SponsorsPage';
import ProNightsHeader from './routes/ProNightsHeader';
import ImageCarousel from './routes/ImageCarousel';
import Footer from "./components/footer/Footer";
import Owl from  "./assets/bird-1.svg";
import BackgroundMusic from "./components/BackgroundMusic";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
     
      
      <HomePage />
      <AboutPage/>
      <StatsPage/>
      <Gallery />
      <SponsorsPage />
      <BackgroundMusic />
      <div className="app-container">
        <div className='owl'>
          <img src={Owl}></img>
        </div>
        <ProNightsHeader />
        <div className="carousel-section">
          <ImageCarousel />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;


