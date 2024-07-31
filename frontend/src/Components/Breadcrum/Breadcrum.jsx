import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../Assets/Frontend_Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  //מציין את המיקום הנוכחי באתר בצורה היררכית
  //"HOME" -> "SHOP" ->
  const { product } = props;

  if (!product) {
    return null;
  }

  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
