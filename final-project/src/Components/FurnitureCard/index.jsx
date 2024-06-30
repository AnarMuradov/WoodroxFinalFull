import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'

function FurnitureCard({img,h,price,i,click,detail}) {
  return (
    <div className="furniture__card">
        <img src={img} alt="" />
        <div className='furniture__card__content'>
        <Link to={detail}><h4>{h}</h4></Link>
        <div className='furniture__card__content__buy'>
        <p>{price}$ </p>
        <i onClick={click} className={i}></i>
        </div>
        </div>
    </div>
  )
}

export default FurnitureCard