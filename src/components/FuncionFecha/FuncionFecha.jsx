import React from 'react'
import{useState} from "react"


function FuncionFecha(){

    const [state, setState] = useState({
        date: new Date(),
         count:0
    })
    
    function set(){
        setState({
            date: new Date(),
            count: state.count + 1
        })
    }
    return(
        <div>
            {state.count}
            <br/>
            {state.date.toString()}
            <br/>
            <button onClick={set}>Click me</button>
        </div>    
    )
}

export default FuncionFecha
