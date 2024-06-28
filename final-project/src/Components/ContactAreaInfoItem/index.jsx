import React from 'react'
import "./index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactAreaInfoItem({icon,h,p}) {
  return (
    <div className='contact-area__info-item'>
        <FontAwesomeIcon icon={icon} />
        <h6>{h}</h6>
        <p>{p}</p>
    </div>
  )
}

export default ContactAreaInfoItem