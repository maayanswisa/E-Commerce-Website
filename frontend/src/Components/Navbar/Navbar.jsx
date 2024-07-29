import React, { useContext, useState, useRef } from "react";
import "./Navbar.css";
import logo from "../Assets/Frontend_Assets/logo.png";
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/Frontend_Assets/nav_dropdown.png";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  /*  
הפונקציה נועדה לטפל בלחיצה על כפתור שמפעיל תפריט נפתח
הפונקציה משנה את המחלקה של רכיב התפריט על ידי הוספה או הסרה של המחלקה
פעולה זו תגרום לתפריט להיות גלוי או להיעלם
הפונקציה משנה את המחלקה של הרכיב שנלחץ 
(הרכיב ממנו הופעלה הפונקציה)
 על ידי הוספה או הסרה של המחלקה
 open
  */

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          className={menu === "shop" ? "active" : ""}
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            SHOP
          </Link>
          <hr />
        </li>
        <li
          className={menu === "mens" ? "active" : ""}
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            MEN
          </Link>

          <hr />
        </li>
        <li
          className={menu === "womens" ? "active" : ""}
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/womens">
            WOMEN
          </Link>

          <hr />
        </li>
        <li
          className={menu === "kids" ? "active" : ""}
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            KIDS
          </Link>

          <hr />
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
