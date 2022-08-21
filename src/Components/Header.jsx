import React from 'react'
import logo from "../image/logo.svg"
import "./Css/Common.css"
import "./Css/Header.css"

const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt = "logo"/>
        <a href='#'><div className='coffe_button'>Get me a Coffe</div></a>
    </div>
  )
}
export default Header