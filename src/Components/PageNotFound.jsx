import React from "react";
import "../CSS/404.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/appointments" className="home-link">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
