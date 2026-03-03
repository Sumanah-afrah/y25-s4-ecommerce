import React from 'react'
import '../App.css'
import Navlinks from './Navlinks'
const logo = '/images/logo.png'

function Header() {
  return (
    <div className="header common">
      <img src = {logo} alt = "logo"/>
      <p>Ayrah Stores
         <Navlinks/>
        
      </p>
    </div>
  )
}

export default Header