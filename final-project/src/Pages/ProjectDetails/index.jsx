import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Overlay from "../../Components/Overlay";
import Portfolio from "../../Components/Portfolio";

function ProjectDetails() {
  return (
    <>
      <Overlay head="Project Details">
        <Link to="/">Home</Link>
        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        <Link to="/project">Project</Link>
        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        <Link to="/project-details">Project Details</Link>
      </Overlay>
      <Portfolio/>
    </>
  );
}

export default ProjectDetails;