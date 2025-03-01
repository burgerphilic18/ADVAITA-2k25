
import React from "react";
import Navbar from "./components/navbar/Nav";
import AboutPage from "./routes/about";
import HomePage from "./routes/HomePage";
import StatsPage from "./routes/stats";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutPage/>
      <StatsPage/>
      <Footer/>
    </div>
  );
};

export default App;

