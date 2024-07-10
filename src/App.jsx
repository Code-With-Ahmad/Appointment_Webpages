import React from "react";
import "./CSS/style.css";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main__section">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
