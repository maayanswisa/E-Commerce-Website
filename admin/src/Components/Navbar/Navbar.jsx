import React from "react";
import "./Navbar.css";
import navlogo from "../../assets/Admin_Assets/nav-logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="nav-logo" src={navlogo} alt="" />
    </div>
  );
};

export default Navbar;
