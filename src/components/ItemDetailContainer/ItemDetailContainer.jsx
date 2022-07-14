import React from 'react'
import{useState, useEffect} from "react"

const ItemDetailContainer = ({initial, stock, onAdd}) => {
    const [count, setCount]= useState(initial)

    const suma =()=>{
        count < stock ? setCount(count+1) : alert("no hay stock")
    }

    const resta=(param )=>{
        if(count>initial){
        setCount(count-param)
        }else{
            alert(`compra mínima ${initial}`)
        }
    }

    const reset = ()=>{
        setCount(initial)
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={suma}>+</button>
        <button onClick={()=>resta(1)}>-</button>
        {/* si paso la función con parámetros tiene que tener callback */}
        <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default ItemDetailContainer

// concepto de custom hook: modularizar en funciones