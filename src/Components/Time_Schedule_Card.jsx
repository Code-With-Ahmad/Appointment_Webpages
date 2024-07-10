import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faFax,
} from "@fortawesome/free-solid-svg-icons";

const Time_Schedule_Card = ({ distance, diagnose, address, phone, fax }) => {
  const [activeTime, setActiveTime] = useState(null);

  const handleTimeClick = (index) => {
    setActiveTime(index);
  };

  const renderTimeSlots = () => {
    const timeSlots = [
      "09-10 A.M",
      "10-11 A.M",
      "11-12 P.M",
      "12-01 P.M",
      "01-02 P.M",
      "02-03 P.M",
      "03-04 P.M",
      "04-05 P.M",
    ];

    return timeSlots.map((time, index) => (
      <div
        key={index}
        className={`time ${activeTime === index ? "active_lin_time" : ""}`}
        onClick={() => handleTimeClick(index)}
      >
        <p>{time}</p>
      </div>
    ));
  };

  return (
    <div className="time_card_container">
      <div className="left">
        <div className="distance">
          <div className="distance_value">
            <FontAwesomeIcon icon={faLocationDot} />
            <h4>{distance}</h4>
          </div>
          <a href="#">View Location Details</a>
        </div>
        <div className="diagnose">
          <h1>{diagnose}</h1>
        </div>
        <div className="location">
          <p>
            <span className="area">{address.area}</span>
            <span className="street">{address.street}</span>
            <span className="country">{address.country}</span>
          </p>
        </div>
        <div className="contact">
          <div className="phone">
            <FontAwesomeIcon icon={faPhone} />
            <span id="phone_no">{phone}</span>
          </div>
          <div className="fax">
            <FontAwesomeIcon icon={faFax} />
            <span id="fax_no">{fax}</span>
          </div>
        </div>
      </div>
      <div className="right">
        <h1>Select Available Time Slots</h1>
        <div className="time_Slots_container">{renderTimeSlots()}</div>
      </div>
    </div>
  );
};

export default Time_Schedule_Card;
