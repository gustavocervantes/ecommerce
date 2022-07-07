// esto es un componente de clase, por eso en react no se usa class, porque es palabra reservada para crear clases
import React, { Component } from 'react'

// extends quiere decir que hereda de Component
export class ComponenteClase extends Component {

  render() {
    return (
      <div>ComponenteClase</div>
    )
  }
  
}

export default ComponenteClase