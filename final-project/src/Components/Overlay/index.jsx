import React from 'react'
import "./index.scss"

function Overlay({head,children}) {
  return (
    <div className='overlay'>
        <div className="overlay__container">
            <h2>{head}</h2>
            <p>{children}</p>
        </div>
    </div>
  )
}

export default Overlay