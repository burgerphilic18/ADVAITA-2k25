import React from "react";
import Navbar from "./components/navbar/Nav";
import HomePage from "./routes/HomePage";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;