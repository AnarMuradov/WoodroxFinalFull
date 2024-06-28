import "./index.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeaderTop() {
  return (
    <div className="header__top">
      <div className="header__top__left">
        <a href="/#">Visit Us</a>
        <a href="/#">Online Support</a>
      </div>
      <div className="header__top__right">
        <ul className="header__top__right__icons">
          <li>
            <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
          </li>
          <li>
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
          </li>
          <li>
            <FontAwesomeIcon icon="fa-brands fa-dribbble" />
          </li>
          <li>
            <FontAwesomeIcon icon="fa-brands fa-behance" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderTop;
