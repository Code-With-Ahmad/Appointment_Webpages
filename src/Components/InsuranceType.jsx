// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faAngleUp,
//   faAngleDown,
//   faToggleOn,
//   faToggleOff,
// } from "@fortawesome/free-solid-svg-icons";

// const InsuranceType = ({
//   title,
//   insurancePlan,
//   insuranceType,
//   insuranceNo,
//   expireDate,
//   expanded,
//   active,
//   onToggle,
//   onStatusToggle,
// }) => {
//   return (
//     <div className="insurance__type">
//       <div className="insuranceTypeHeading" onClick={onToggle}>
//         <h2>{title}</h2>
//         <FontAwesomeIcon className="cursor_pointer" icon={expanded ? faAngleDown : faAngleUp} />
//       </div>
//       <div
//         className="insurance_type_details"
//         style={{
//           display: expanded ? "flex" : "none",
//           flexDirection: "column",
//         }}
//       >
//         <div className="i_t_d_top">
//           <div className="i_t_d_left">
//             <div className="insurance__img">
//               <img src="data:image/jpeg;base64,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" alt="logo" />
//             </div>
//             <div className="insurance_detail">
//               <h2>{insurancePlan}</h2>
//               <h2>{insuranceType}</h2>
//             </div>
//           </div>
//           <div className="i_t_d_right" onClick={onStatusToggle}>
//             <FontAwesomeIcon className="cursor_pointer" icon={active ? faToggleOn : faToggleOff} />
//             <h5>{active ? " Active" : " Inactive"}</h5>
//           </div>
//         </div>
//         <div className="i_t_d_bottom">
//           <div className="insurance__number">
//             <h4>Insurance No</h4>
//             <p>{insuranceNo}</p>
//           </div>
//           <div className="insurance__expire">
//             <h3>Expire</h3>
//             <p>{expireDate}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InsuranceType;
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
