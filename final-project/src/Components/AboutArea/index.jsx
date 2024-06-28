import React from 'react'
import "./index.scss"

function AboutArea() {
  return (
    <div className='aboutarea'>
      <div className="aboutarea__container">
        <div className="aboutarea__text">
          <h6>BRAND NEW APP TO BLOW YOUR MIND</h6>
          <h3>WE’VE MADE A LIFE <br />THAT WILL CHANGE YOU</h3>
          <h5>We are here to listen from you deliver exellence</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
          <a href="/#">GET STARTED NOW</a>
        </div>
        <div className="aboutarea__image">
          <img src="https://preview.colorlib.com/theme/woodrox/img/about-1.jpg.webp" alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutArea