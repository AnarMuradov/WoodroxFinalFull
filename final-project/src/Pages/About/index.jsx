import React from "react";
import Projects from "../../Components/Projects";
import Feature from "../../Components/Feature";
import ClietsLogo from "../../Components/ClientsLogo";
import Overlay from "../../Components/Overlay";
import AboutArea from "../../Components/AboutArea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Overlay head="About Us">
        <Link to="/">Home</Link>
        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        <Link to="/about">About Us</Link>
      </Overlay>
      <AboutArea />
      <Projects />
      <Feature />
      <ClietsLogo />
    </>
  );
}

export default About;