import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faToggleOn,
  faToggleOff,
} from "@fortawesome/free-solid-svg-icons";

const InsuranceType = ({
  title,
  insurancePlan,
  insuranceType,
  insuranceNo,
  expireDate,
  expanded,
  active,
  onToggle,
  onStatusToggle,
  setSelectedInsurance,
}) => {
  const handleExpand = () => {
    onToggle();
    setSelectedInsurance(expanded ? null : insuranceNo);
  };

  return (
    <div className="insurance__type">
      <div className="insuranceTypeHeading" onClick={handleExpand}>
        <h2>{title}</h2>
        <FontAwesomeIcon icon={expanded ? faAngleDown : faAngleUp} />
      </div>
      <div
        className="insurance_type_details"
        style={{
          display: expanded ? "flex" : "none",
          flexDirection: "column",
        }}
      >
        <div className="i_t_d_top">
          <div className="i_t_d_left">
            <div className="insurance__img">
              <img
                src="https://png.pngtree.com/template/20190316/ourmid/pngtree-insurance-logo-vector-image_80257.jpg"
                alt="logo"
              />
            </div>
            <div className="insurance_detail">
              <h2>{insurancePlan}</h2>
              <h2>{insuranceType}</h2>
            </div>
          </div>
          <div className="i_t_d_right" onClick={onStatusToggle}>
            <FontAwesomeIcon icon={active ? faToggleOn : faToggleOff} />
            <h5>{active ? " Active" : " Inactive"}</h5>
          </div>
        </div>
        <div className="i_t_d_bottom">
          <div className="insurance__number">
            <h4>Insurance No</h4>
            <p>{insuranceNo}</p>
          </div>
          <div className="insurance__expire">
            <h3>Expire</h3>
            <p>{expireDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceType;
