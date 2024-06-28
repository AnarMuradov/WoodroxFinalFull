import React from 'react'
import "./index.scss"
import ProjectsCard from '../ProjectsCard'

function Projects() {
  return (
    <div className='projects'>
      <ProjectsCard w = {"100%"}
      img={"https://preview.colorlib.com/theme/woodrox/img/projects/projects-1.jpg.webp"}
      h={"Alex Complex for esidence"}
      p={"LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer."}
      />
            <ProjectsCard w = {"100%"}
      img={"https://preview.colorlib.com/theme/woodrox/img/projects/projects-2.jpg.webp"}
      h={"Alex Complex for esidence"}
      p={"LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer."}
      />
            <ProjectsCard w = {"250%"}
      img={"https://preview.colorlib.com/theme/woodrox/img/projects/projects-3.jpg.webp"}
      h={"Alex Complex for esidence"}
      p={"LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer."}
      />
            <ProjectsCard w = {"100%"}
      img={"https://preview.colorlib.com/theme/woodrox/img/projects/projects-4.jpg.webp"}
      h={"Alex Complex for esidence"}
      p={"LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer."}
      />
    </div>
    
  )
}

export default Projects