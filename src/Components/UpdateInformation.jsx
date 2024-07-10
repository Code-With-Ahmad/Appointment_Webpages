import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPlus, faImage } from "@fortawesome/free-solid-svg-icons";
import InsuranceType from "./InsuranceType";
import SideBar_User from "./SideBar_User";

const UpdateInformation = () => {
  const [currentTab, setCurrentTab] = useState("Insurance Info");
  const [expandedSections, setExpandedSections] = useState({
    primary: false,
    secondary: false,
    tertiary: false,
  });

  const [activeStatuses, setActiveStatuses] = useState({
    primary: true,
    secondary: true,
    tertiary: true,
  });

  const [selectedInsurance, setSelectedInsurance] = useState(null);

  const handleTabClick = (tabName) => {
    setCurrentTab(tabName);
  };

  const handleToggle = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleStatusToggle = (section) => {
    setActiveStatuses((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="update__information__section">
      <div className="update__information__left">
        <div className="update_breadcrumb">
          <h3>Update info</h3>
          <h3>
            <FontAwesomeIcon icon={faHouse} />{" "}
            <span className="current">{currentTab}</span>
          </h3>
        </div>
        <div className="update_links">
          <ul>
            <li
              className={
                currentTab === "Personal Info" ? "update-link-active" : ""
              }
              onClick={() => handleTabClick("Personal Info")}
            >
              Personal Info
            </li>
            <li
              className={
                currentTab === "Insurance Info" ? "update-link-active" : ""
              }
              onClick={() => handleTabClick("Insurance Info")}
            >
              Insurance Info
            </li>
            <li
              className={
                currentTab === "Billing Info" ? "update-link-active" : ""
              }
              onClick={() => handleTabClick("Billing Info")}
            >
              Billing Info
            </li>
            <li
              className={
                currentTab === "Password & Security" ? "update-link-active" : ""
              }
              onClick={() => handleTabClick("Password & Security")}
            >
              Password & Security
            </li>
          </ul>
        </div>
        <div className="insurance__details">
          <div className="insurance_list">
            <div className="insurance_heading">
              <h3>Insurance Info</h3>
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <InsuranceType
              title="Primary Insurance"
              insurancePlan="Primary Plan"
              insuranceType="MEDICARE PLAN"
              insuranceNo="XEW1245754544575"
              expireDate="09 / 25"
              expanded={expandedSections.primary}
              active={activeStatuses.primary}
              onToggle={() => handleToggle("primary")}
              onStatusToggle={() => handleStatusToggle("primary")}
              setSelectedInsurance={setSelectedInsurance}
            />
            <InsuranceType
              title="Secondary Insurance"
              insurancePlan="Secondary Plan"
              insuranceType="MEDICARE PLAN"
              insuranceNo="KEN4545455454545"
              expireDate="10 / 25"
              expanded={expandedSections.secondary}
              active={activeStatuses.secondary}
              onToggle={() => handleToggle("secondary")}
              onStatusToggle={() => handleStatusToggle("secondary")}
              setSelectedInsurance={setSelectedInsurance}
            />
            <InsuranceType
              title="Tertiary Insurance"
              insurancePlan="Tertiary Plan"
              insuranceType="MEDICARE PLAN"
              insuranceNo="ABS25455452154515"
              expireDate="11 / 25"
              expanded={expandedSections.tertiary}
              active={activeStatuses.tertiary}
              onToggle={() => handleToggle("tertiary")}
              onStatusToggle={() => handleStatusToggle("tertiary")}
              setSelectedInsurance={setSelectedInsurance}
            />
            <a href="#" className="viewOrder">
              View Order
            </a>
            <div className="insurance__cards">
              <h2>Insurance Card</h2>
              <div className="insurance__card">
                <div className="insurance__card__container">
                  <h1>Card Front Side</h1>
                  <div className="card_image">
                    <FontAwesomeIcon icon={faImage} />
                  </div>
                </div>
                <div className="insurance__card__container">
                  <h1>Card backside Side</h1>
                  <div className="card_image">
                    <FontAwesomeIcon icon={faImage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="insurance__info"
            style={{ visibility: selectedInsurance ? "visible" : "hidden" }}
          >
            <div className="insurance_info__heading">
              <h1>Insurance Info</h1>
            </div>
            <div className="insurance_info__sub_heading">
              <h3>Insurance</h3>
            </div>
            <div className="insurance_area">
              <h3>Lahore Punjab , Pakistan </h3>
            </div>
            <div className="insurance_info_details">
              <div className="i_i_d_left">
                <h2>Group ID</h2>
                <input type="text" placeholder="Enter Group ID" />
              </div>
              <div className="i_i_d_right">
                <h2>Insurance No</h2>
                <input type="text" value={selectedInsurance || ""} readOnly />
              </div>
            </div>
            <div className="medicare_advantage_plan">
              <div className="m_a_p_top">
                <p>Is This The Medicare Advantage Plan ?</p>
                <div className="radio">
                  <input type="radio" name="medicare" checked /> Yes
                  <input type="radio" name="medicare" /> No
                </div>
              </div>
              <div className="m_a_p_bottom">
                <h2>Medicare Number</h2>
                <input type="text" placeholder="Enter Your Mobile Number" />
              </div>
            </div>
            <div className="medicare_advantage_plan">
              <div className="m_a_p_top">
                <p>Is This The Medicare Advantage Plan ?</p>
                <div className="radio">
                  <input type="radio" name="medicares" checked /> Yes
                  <input type="radio" name="medicares" /> No
                </div>
              </div>
              <div className="m_a_p_bottom">
                <h2>Reason</h2>

                <input type="text" placeholder="Give A Solid Reason" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="update__information__right">
        <SideBar_User />
        <div className="update_information_right_details">
          <div className="price">
            <a href="#" className="viewOrder">
              Amount Due
            </a>
            <h2>$ 0.00</h2>
            <button>Make A Payment</button>
          </div>
          <div className="rights">
            <h3>Know Your Rights </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              exercitationem tenetur, molestiae atque quia voluptates nobis.
              Sunt, corrupti debitis odit error aliquam eveniet dicta
              voluptates?
            </p>
            <a href="#" className="more">
              <h5>Click Here For More Information</h5>
            </a>
          </div>
          <div className="billing">
            <h3>Billing Questions</h3>
            <ul>
              <li>Tel : (+92) 300 1234567</li>
              <li>Email : someone@gmail.com</li>
              <li>Address : Lahore , Punjab Pakistan</li>
              <li>Timming : 09:00 A.M - 05:00 P.M</li>
            </ul>
          </div>
          <div className="save__changes">
            <button className="save__btn">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateInformation;
