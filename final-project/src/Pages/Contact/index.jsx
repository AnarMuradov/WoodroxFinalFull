import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Overlay from "../../Components/Overlay";
import ContactArea from "../../Components/ContactArea";

function Contact() {
  return (
    <>
      <Overlay head="Contact Us">
        <Link to="/">Home</Link>
        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        <Link to="/contact">Contact Us</Link>
      </Overlay>
      <ContactArea/>
    </>
  );
}

export default Contact;