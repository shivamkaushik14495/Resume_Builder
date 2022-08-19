import React from 'react'
import logo from "../image/logo.svg"
import "./Css/Common.css"
import "./Css/Header.css"

const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt = "logo"/>
        <div className='coffe_button'><a href='google.com'>Get me a Coffe</a></div>
    </div>
  )
}
export default Header