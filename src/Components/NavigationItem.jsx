import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationItem = ({ path, icon, text }) => {
  const location = useLocation();

  return (
    <li className={location.pathname === path ? "active-link" : ""}>
      <Link to={path}>
        <FontAwesomeIcon icon={icon} className="icon" /> {text}
      </Link>
    </li>
  );
};

export default NavigationItem;
