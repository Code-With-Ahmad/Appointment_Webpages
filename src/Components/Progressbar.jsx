import React from "react";
import "../CSS/ProgressBar.css";

const Progressbar = ({ step }) => {
  return (
    <div className="v-progress">
      <ul>
        <li className={`v-progress-item ${step >= 1 ? "completed" : ""}`}>
          Reason for visiting
        </li>
        <li className={`v-progress-item ${step >= 1 ? "completed" : ""}`}>
          Enter Address
        </li>
        <li
          className={`v-progress-item ${
            step >= 2 ? "completed" : step === 2 ? "inprogress" : ""
          }`}
        >
          Location, Date, Time
        </li>
        <li
          className={`v-progress-item ${
            step >= 3 ? "completed" : step === 3 ? "inprogress" : ""
          }`}
        >
          Enter Personal <br /> <br /> and Insurance detail
        </li>
      </ul>
    </div>
  );
};

export default Progressbar;
