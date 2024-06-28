import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <h2>
            PRECISE CONCEPT DESIGN <br /> FOR STYLISH LIVING
          </h2>
          <p>
            If you are looking at blank cassettes on the web, you may be very
            confused at the difference in price. You may see some for as low as
            $.17 each.
          </p>
          <a href="/#">Get Started</a>
        </div>
        <ul className="hero__right">
          <li><FontAwesomeIcon icon="fa-solid fa-couch" /></li>
          <li><FontAwesomeIcon icon="fa-solid fa-bed" /></li>
          <li><FontAwesomeIcon icon="fa-solid fa-computer" /></li>
          <li><FontAwesomeIcon icon="fa-solid fa-anchor" /></li>
          <li><FontAwesomeIcon icon="fa-solid fa-toilet-portable" /></li>
          <li><FontAwesomeIcon icon="fa-solid fa-kitchen-set" /></li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;