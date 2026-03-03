import React from 'react'
import logo from '/images/logo.png'


function Template() {
  return (
    <div
        className="card">
          <center>
            <h5>Data loading...</h5>
            <img src={logo} alt="logo" />
            <p>Price:₹ xx,xxx</p>
            </center>
          
    </div>
  )
}

export default Template
