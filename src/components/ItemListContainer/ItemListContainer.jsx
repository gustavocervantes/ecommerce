// rafce
import React from 'react'
// primer hook que se ve en el curso
import{useState, useEffect} from "react"
// es una función que retorna un array con dos posiciones
//  useState=>[0,1]
// useState=>[valor, función para cambiar el valor del estado]
// useEffect es otro hook muy conocido. para ejecutar efectos secundarios

function ItemListContainer({greetingg, children,obj}) {
    console.log(obj)

    // desestructuración de un array
    const [contador, actualizarContador] = useState(0)
    // el parámetro que le paso a useState es el valor del parámetro que va a ser mi estado
    // le puse un 0 porque es un contador y "estado" deja de ser undefined
    // podría haber sido otro tipo de dato: string, objeto, etc
    // setEstado sirve para cambiar el valor que tiene el estado
    // esto hace que la función sea persistente, que no pase al garbage collector
    // useState(0): me devuelve un array con dos posiciones y valor inicial 0
    const [bool, actualizarBool]=useState(true)


    // let count =0
    const aumentar =()=>{
    //     count++ //count = count+1 //count+=1
    // esto no va porque react funciona de manera declarativa
    // esto se pone dentro de la función porque sino lo re-renderiza hasta el infinito
    // lo pongo dentro de una función que esté ligada a un evento
        actualizarContador(contador+1)
    }
    const cambiarBool=()=>{
        actualizarBool(!bool)
    }

    useEffect(()=>{
        // esta función se ejecuta después del rendering que se montó
        console.log("addEventListener ")
        return()=>{
        console.log("cuando hay un render, antes de que se ejecute el de arriba, va este")
        }
        // me desuscribo al addEventListener
        // lo desuscribe y suscribe un nuevo addEventListener. Me garantizo que haya 
        // solo 1
    
    })

    // useEffect(()=>{
    //     // esta función se ejecuta después del rendering que se montó
    //     console.log("este es el hook que usamos para las apis ")
    //     // guardo en un useState y listo
    
    // },[])
    // // le agrego un array vacío o de dependencia para que no se ejecute siempre
    // // que renderiza
    // useEffect(()=>{
    //     // esta función se ejecuta después del rendering que se montó
    //     console.log("que este useEffect se ejecute solo cuando cambie bool")
    //     // se le podría pasar otro ento para que dispare otro useEffect en simultáneo
    //     // ejemplo pasandole en el array de abajo "contador"
        
    
    // },[bool])

    // console.log("item list container rendered2")
  return (

    <div>
        {greetingg}
        {/* si tengo dos componente formulario lo trato como un array */}
        {children[0]}<br></br>
        {contador}
        <br />
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={cambiarBool}>Cambiar Estado</button>
        
    </div>
  )
}

export default ItemListContainer
// las constantes y las variables viven mientras la función es ejecutada
// al terminar la ejecución de la función serán puestas a disposición de garbage collector
// se reinicia en cada render=cada nueva ejecución de itemListContainer
// que ocurre al ejecutar un evento
// props estados y eventos, cualquiera de estos cambios re renderiza
// una nueva ejecución a mi función

// la primera vez que se ejecuta la función se monta el componente, se crea el nodo