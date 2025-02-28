
import React from "react";
import Navbar from "./components/navbar/Nav";
import AboutPage from "./routes/about";
import HomePage from "./routes/HomePage";
import StatsPage from "./routes/stats";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutPage/>
      <StatsPage/>
    </div>
  );
};

export default App;

