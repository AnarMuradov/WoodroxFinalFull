import React from 'react'
import "./index.scss"

function ProjectsCard({img,h,p,w}) {
  return (
    <div className='projects__card' style={{width: w}}>
        <img src={img} alt="" />
        <div className="projects__card__slide">
            <h4>{h}</h4>
            <p>{p}</p>
        </div>
    </div>
  )
}

export default ProjectsCard