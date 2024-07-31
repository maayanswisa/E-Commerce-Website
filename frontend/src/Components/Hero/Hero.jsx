import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/Frontend_Assets/hand_icon.png";
import arrow_icon from "../Assets/Frontend_Assets/arrow.png";
import hero_image from "../Assets/Frontend_Assets/hero_image.png";
/*
במונחים של עיצוב אתרים ושיווק, המונח 
"Hero" 
מתייחס לאזור העליון והבולט ביותר בדף אינטרנט, 
בדרך כלל בחלקו העליון של הדף. 
הוא עוסק בדרך כלל בהצגת תוכן חשוב מאוד, 
כמו מבצע מיוחד, מוצר חדש, או מסר מרכזי שברצונך להעביר למבקרים באתר
*/
export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
