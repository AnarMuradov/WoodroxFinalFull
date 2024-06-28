import React from 'react'
import "./index.scss"

function FurnitureCard({img,h,p}) {
  return (
    <div className="furniture__card">
        <img src={img} alt="" />
        <h4>{h}</h4>
        <p>{p}</p>
    </div>
  )
}

export default FurnitureCard