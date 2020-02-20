import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'

const Header = (props) => {
  return (
    <div className="header">
      <img src="https://i.pinimg.com/originals/62/9a/09/629a09e4fe7528f1caab1e77afdeb4f6.png" alt='logo' />
      <h1>
        SHELFIE
      </h1>
      <Link to='/' >
        Dashboard
      </Link>
      <Link to='/about' >
        About
      </Link>
    </div>
  )
}

export default Header