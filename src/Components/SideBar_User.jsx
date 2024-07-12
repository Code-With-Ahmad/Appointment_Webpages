

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faUser } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import NavigationItem from "./NavigationItem";

const SideBar_User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  return (
    <div className="sidebar_user">
      <div className="sidebar_user_profile">
        <div className="user_logo">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <h1>{user ? user.displayName.split(" ")[0] : "Guest"}</h1>
      </div>
      <div className="sidebar_userSetting">
        {user ? (
          <a className="logout__btn_SideBar" onClick={handleLogout}>
            Logout
          </a>
        ) : (
          <NavigationItem path="/login-page" icon="" text="Login" />
        )}
        {/* <FontAwesomeIcon icon={faGear} /> */}
      </div>
    </div>
  );
};

export default SideBar_User;
