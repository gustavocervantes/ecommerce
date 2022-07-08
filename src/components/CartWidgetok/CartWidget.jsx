import React from 'react'
import CartWidget from "../Img/CartWidget.svg"

const LogoCartWidget= ()=>{
    return(
      <img src={CartWidget} className="imgNav"/>
      // en vez del componente se le podría poner la url de la imagen entre paréntesis
      // también se podría poner el archivo raíz de la app "/logo.svg"
    )
  }

export default LogoCartWidget