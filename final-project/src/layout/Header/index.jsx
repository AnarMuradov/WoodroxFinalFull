import React from 'react'
import HeaderTop from '../../Components/HeaderTop'
import HeaderBottom from '../../Components/HeaderBottom'
import "./index.scss"

function Header() {
  return (
    <div className="header">
      <HeaderTop/>
      <HeaderBottom/>
    </div>
  )
}

export default Header 