
import React from "react";
import Navbar from "./components/navbar/Nav";
import AboutPage from "./routes/about";
import HomePage from "./routes/HomePage";
import StatsPage from "./routes/stats";
import Gallery from './routes/Gallery';
import SponsorsPage from './routes/SponsorsPage';
import ProNightsHeader from './routes/ProNightsHeader';
import ImageCarousel from './routes/ImageCarousel';
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutPage/>
      <StatsPage/>
      <Gallery />
      <SponsorsPage />
      <div className="app-container">
        <ProNightsHeader />
        <div className="carousel-section">
          <ImageCarousel />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;

