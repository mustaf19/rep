import React from "react";
import "./footerArea.css";
import logo from "./utils/logo.png";

const FooterArea = () => {
  return (
    <div id="footerArea">
      <div>
        <img src={logo} alt="logo"></img>
        <p>
          Software constraints are only confining if you use them for what
          they're intended to be used for.
        </p>
        <div>
          <ul>
            <li>f</li>
            <li>tw</li>
            <li>in</li>
          </ul>
        </div>
      </div>
      <div>
        <h2>Featured Cities</h2>
        <div>
          <ul id="featuredCityList">
            <li className="cityList">Home</li>
            <li className="cityList">About Us</li>
            <li className="cityList">Contact Us</li>
            <li className="cityList">Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div id="newsletter">
        {" "}
        <h4>Our Newsletter</h4>
        <button>Enter Your Email Address</button>
        <button>Subcribe Now</button>
      </div>
    </div>
  );
};

export default FooterArea;
