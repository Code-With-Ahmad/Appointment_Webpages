import React from "react";
import NavigationItem from "./NavigationItem";
import {
  faBook,
  faIdCard,
  faBell,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <NavigationItem
            path="/payment-history"
            icon={faBook}
            text="Payment History"
          />
          <NavigationItem
            path="/appointments"
            icon={faIdCard}
            text="Appointments"
          />
          <NavigationItem
            path="/my-notifications"
            icon={faBell}
            text="My Notifications"
          />
          <NavigationItem
            path="/update-information"
            icon={faPenToSquare}
            text="Update Information"
          />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
