import React from "react";
import "./navbar.css";
import logo from "./utils/logo.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="Logo"></img>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
