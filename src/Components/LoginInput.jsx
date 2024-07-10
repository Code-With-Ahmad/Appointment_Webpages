import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginInput = ({ label, type, placeholder, icon }) => {
  return (
    <div className="input_login">
      <label>{label}</label>
      <div className="input_field_login">
        <FontAwesomeIcon icon={icon} />
        <input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default LoginInput;
