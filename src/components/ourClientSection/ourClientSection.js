import React from "react";
import "./ourClientSection.css";
import s2logo from './utils/s2logo.png';
import salonLogo from './utils/salon-logo.png';
import schoolHyd from './utils/school-hyd.jpg';
import syscoCleanLogo from './utils/sysco-clean-logo.png';
const OurClientSection = () => {
  return (
    <div className="ourClient">
      <div className="heading">
        <h2>
          Our <span>Clients</span>
        </h2>
        <p>Some of our clients taken software solution from us</p>
      </div>
      <div id="clientDiv">
        <ul id="clients">
          <li className="client">
            <img className="clientsLogo" src={s2logo} alt=""></img>
          </li>
          <li>
            <img className="clientsLogo"  src={salonLogo} alt=""></img>
          </li>
          <li>
            <img className="clientsLogo"  src={schoolHyd}  alt=""></img>
          </li>
          <li>
            <img className="clientsLogo"  src={syscoCleanLogo}  alt=""></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OurClientSection;
