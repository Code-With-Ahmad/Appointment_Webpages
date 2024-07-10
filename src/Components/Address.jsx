import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MapComponent from "./MapComponent";
import Address_Input from "./Address_Input";
import {
  faCircleCheck,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
const Address = () => {
  return (
    <div className="Address_Section_Container">
      <Address_Input heading="Please Enter Your Address" />
      <MapComponent />
    </div>
  );
};

export default Address;
