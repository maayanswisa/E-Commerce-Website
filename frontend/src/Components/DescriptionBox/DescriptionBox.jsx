import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website allows businesses to sell products and services
          online, providing customers with a convenient shopping experience from
          anywhere in the world.
        </p>
        <p>
          Effective e-commerce sites often include features such as user
          reviews, secure payment options, and personalized recommendations to
          enhance the shopping experience and build customer trust
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
