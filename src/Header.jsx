import React from 'react'
import logo from './Images/index.png'
function Header() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" width="70" height="70" />
        <h1>Keep It</h1>
      </div>
    </>
  )
}

export default Header
