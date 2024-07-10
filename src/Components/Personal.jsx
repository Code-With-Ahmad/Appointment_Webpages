import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
const Personal = () => {
  return (
    <div className="personal__Container">
      <div className="p_c_heading">
        <h1>Review Appointment Details</h1>
      </div>
      <div className="sub_section">
        <div className="top">
          <h3>Address</h3>
          <FontAwesomeIcon icon={faPenToSquare} />
        </div>
        <div className="bottom">
          <p>Street No . 8</p>
          <p>Daroghawala Lahore , Pakistan</p>
        </div>
      </div>
      <div className="sub_section">
        <div className="top">
          <h3>Reason For Visiting</h3>
          <FontAwesomeIcon icon={faPenToSquare} />
        </div>
        <div className="bottom">
          <p>
            <FontAwesomeIcon icon={faCircleInfo} /> Employer Drug and Alcohol
          </p>
        </div>
      </div>
      <div className="sub_section">
        <div className="top">
          <h3>Location , Date and Time </h3>
          <FontAwesomeIcon icon={faPenToSquare} />
        </div>
        <div className="bottom">
          <p>
            <FontAwesomeIcon icon={faCircleInfo} /> Quest Diagnostics - Agoura
            Hills Canwoo - Employer Drug Testing Not Offered
          </p>
        </div>
      </div>
      <div className="sub_section">
        <div className="top">
          <h3>Personal Details</h3>
          <FontAwesomeIcon icon={faPenToSquare} />
        </div>
        <div className="bottom">
          <p>
            <FontAwesomeIcon icon={faCircleInfo} /> Name
          </p>
          <p>Najam Saeed</p>
        </div>
      </div>
    </div>
  );
};

export default Personal;
