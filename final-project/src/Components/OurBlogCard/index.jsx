import React from 'react'
import "./index.scss"

function OurBlogCard({img,a1,a2,h,p,s}) {
  return (
    <div className='ourblog__card'>
        <img src={img} alt="" />
        <div className="ourblog__card__btn">
            <a href="/#">{a1}</a>
            <a href="/#">{a2}</a>
        </div>
        <h4>{h}</h4>
        <p>{p}</p>
        <span>{s}</span>
    </div>
  )
}

export default OurBlogCard