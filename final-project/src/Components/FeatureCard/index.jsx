import React from 'react'
import "./index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FeatureCard({icon,h,p}) {
  return (
    <div className='feature__card'>
        <div className='feature__card__text'>
            <FontAwesomeIcon icon={icon} />
            <h4>{h}</h4>
        </div>
        <p>{p}</p>
    </div>
  )
}

export default FeatureCard