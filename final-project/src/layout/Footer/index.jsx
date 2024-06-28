import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <h3>ABOUT ME</h3>
          <p>
            Do you want to be even more successful? Learn to love learning and
            growth. The more effort you put into improving your skills,
          </p>
          <p>
            Copyright ©2023 All rights reserved | This template is made with by{" "}
            <a href="/#"> Colorlib</a>
          </p>
        </div>
        <div className="footer__center">
          <h3>NEWSLETTER</h3>
          <p>Stay updated with our latest trends</p>
          <div className="footer__center__search">
            <input type="text" placeholder="Enter email address"/>
            <button><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></button>
          </div>
        </div>
        <div className="footer__right">
          <h3>FOLLOW ME</h3>
          <p>Let us be social</p>
          <ul className="footer__right__icons">
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
    </div>
  );
}

export default Footer;
