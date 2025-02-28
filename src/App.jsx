import React from "react";
import Navbar from "./components/navbar/Nav";
import AboutPage from "./routes/about";
import HomePage from "./routes/Home";


const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutPage/>
    </div>
  );
};

export default App;