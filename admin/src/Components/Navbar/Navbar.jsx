import React from "react";
import "./Navbar.css";
import navlogo from "../../assets/Admin_Assets/nav-logo.svg";
import navProfile from "../../assets/Admin_Assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="nav-logo" src={navlogo} alt="" />
      <img className="nav-profile" src={navProfile} alt="" />
    </div>
  );
};

export default Navbar;
