import React, { useState } from "react";
import SideBar_User from "./SideBar_User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Progressbar from "./Progressbar";
import Address from "./Address";
import Date_and_Time from "./Date_and_Time";
import Personal from "./Personal";

const Appointments = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  const prevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const currentText = step === 2 ? "New Order" : "New Appointment";

  return (
    <div className="Appointment_container">
      <div className="appointment_left">
        <div className="appointment_breadcrumb">
          <h3>All Appointments</h3>
          <h3>
            <FontAwesomeIcon icon={faHouse} />
            <span className="current">{currentText}</span>
          </h3>
        </div>
        {step === 1 && <Address />}
        {step === 2 && <Date_and_Time />}
        {step === 3 && <Personal />}
        {step > 1 && (
          <button className="prev" onClick={prevStep}>
            Back
          </button>
        )}
      </div>
      <div className="appointment_right">
        <SideBar_User />
        <Progressbar step={step} />
        <div className="billing" id="scheduling_questions">
          <h3>Scheduling Questions</h3>
          <ul>
            <li>Tel : (+92) 300 1234567</li>
            <li>Email : someone@gmail.com</li>
            <li>Address : Lahore , Punjab Pakistan</li>
            <li>Timming : 09:00 A.M - 05:00 P.M</li>
          </ul>
        </div>
        <div className="progress-button">
          {step < 3 ? (
            <div className="step_btn">
              <button className="save_draft">Save Draft</button>
              <button className="next" onClick={nextStep}>
                Next
              </button>
            </div>
          ) : (
            <button id="schedule__appointment">Schedule Appointment</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
