import React from 'react'
import logo from "../image/logo.svg"
import "./Css/Header.css"

const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt = "logo"/>
        <div className='coffe_button'>Get me a Coffe</div>
    </div>
  )
}

export default Header