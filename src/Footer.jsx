import React from 'react'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <>
      <h5 className="footer">&copy; Bibek Chalise {year}</h5>
    </>
  )
}

export default Footer
