import React from 'react'
import "./Header.css"
import CartWidget from "../../components/Img/CartWidget.svg"

const Header = () => {
  return (
    <div className='header'>
        <h1>Logo </h1>
        <img src={CartWidget} alt="logo" width="100px"/>
    </div>
  )
}

export default Header