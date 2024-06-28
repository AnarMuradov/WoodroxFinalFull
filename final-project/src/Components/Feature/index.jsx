import React from "react";
import "./index.scss";
import FeatureCard from "../FeatureCard";

function Feature() {
  return (
    <div className="feature">
      <div className="feature__container">
        <div className="feature__header">
          <h2>RECENT POSTS FROM OUR BLOG</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <div className="feature__cards">
            <FeatureCard icon={"fa-regular fa-user"} 
            h={"EXPERT TECHNICIANS"}
            p={"Usage of the Internet is becoming more common due to rapid advancement of technology and power."}/>

            <FeatureCard icon={"fa-regular fa-newspaper"}
            h={"PROFESSIONAL SERVICE"}
            p={"Usage of the Internet is becoming more common due to rapid advancement of technology and power."}/>

            <FeatureCard icon={"fa-solid fa-phone"}
            h={"GREAT SUPPORT"}
            p={"Usage of the Internet is becoming more common due to rapid advancement of technology and power."}/>

            <FeatureCard icon={"fa-solid fa-rocket"} 
            h={"TECHNICAL SKILLS"}
            p={"Usage of the Internet is becoming more common due to rapid advancement of technology and power."}/>

            <FeatureCard icon={"fa-regular fa-gem"}
            h={"HIGHLY RECOMENDED"}
            p={"Usage of the Internet is becoming more common due to rapid advancement of technology and power."}/>

            <FeatureCard icon={"fa-regular fa-comment"}
            h={"POSITIVE REVIEWS"}
            p={"Usage of the Internet is becoming more common due to rapid advancement of technology and power."}/>
        </div>
      </div>
    </div>
  );
}

export default Feature;
