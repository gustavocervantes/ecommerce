import React, { useState } from 'react'
// se pueden importar imagenes desde las carpetas
// ej. import remera from "../remera.jpg"
// abajo en el objeto se llama {image:remera}
// también se puede llamar a la carpeta desde el objeto

const ItemCount = ({initial, stock, onAdd}) => {
    const[count, setCount]= useState(initial)

    const suma=()=>{
        if(count<stock){
        setCount(count+1)
        }else{
            alert("stock máximo")
        }
        // count>initial ? setCount(count+1): alert("no hay stock")
    }

    const resta=(param)=>{
        if(count>initial){
        setCount(count-param)
        }else{
            alert(`compra mínima: ${initial}`)
        }
    }

    const reset=()=>{
        setCount(initial)
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={suma}>+</button>
        <button onClick={()=>resta(10)}>-</button>
        {/* si tiene parámetros está todo bien, pero sino hay que pasarlo como callback */}
        <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default ItemCount