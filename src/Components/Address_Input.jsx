

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Address_Input = ({ heading, value }) => {
  return (
    <div>
      <div className="a_s_c_heading">
        <h1>{heading}</h1>
      </div>
      <div className="a_s_c_input_container">
        <div className="asc_input">
          <FontAwesomeIcon icon={faCircleCheck} />
          <input
            type="text"
            placeholder="Please Enter The Address "
            value={value}
          />
          <FontAwesomeIcon icon={faLocationDot} />
        </div>
        <button className="home">At Home</button>
      </div>
    </div>
  );
};

export default Address_Input;
