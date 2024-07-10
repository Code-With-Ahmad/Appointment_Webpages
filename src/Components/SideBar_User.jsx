import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faUser,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import NavigationItem from "./NavigationItem";

const SideBar_User = () => {
  return (
    <div className="sidebar_user">
      <div className="sidebar_user_profile">
        <div className="user_logo">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <h1>Guest</h1>
      </div>
      <div className="sidebar_userSetting">
        <NavigationItem path="/login-page" icon="" text="Login" />
        <FontAwesomeIcon icon={faGear} />
      </div>
    </div>
  );
};

export default SideBar_User;
