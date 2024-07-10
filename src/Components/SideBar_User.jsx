import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faUser } from "@fortawesome/free-solid-svg-icons";
const SideBar_User = () => {
  return (
    <div className="sidebar_user">
      <div className="sidebar_user_profile">
        <div className="user_logo">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <h1>Najam Saeed</h1>
      </div>
      <div className="sidebar_userSetting">
        <h3>Logout</h3>
        <FontAwesomeIcon icon={faGear} />
      </div>
    </div>
  );
};

export default SideBar_User;
