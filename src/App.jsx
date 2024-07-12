import React from "react";
import "./CSS/style.css";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <ToastContainer />
      <div className="main__section">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
