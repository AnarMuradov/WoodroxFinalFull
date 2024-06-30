import React from 'react'
import "./index.scss"

function FurnitureCard({img,h,price,i,click}) {
  return (
    <div className="furniture__card">
        <img src={img} alt="" />
        <div className='furniture__card__content'>
        <h4>{h}</h4>
        <div className='furniture__card__content__buy'>
        <p>{price}$ </p>
        <i onClick={click} className={i}></i>
        </div>
        </div>
    </div>
  )
}

export default FurnitureCard