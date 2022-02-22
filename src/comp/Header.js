import React from 'react'
import logo from './img/Logo.png'
import './header.css'

function header() {
  return (
    <div className='header'>
       <img className='logo' src={logo} alt="" />
        <div className='nav-item'>Home</div>
        <div className='nav-item'>About</div>
        <div className='nav-item'>Service</div>
        <div className='nav-item'>Collection</div>
        <div className='nav-item'>Contact US</div>

    </div>
  )
}

export default header