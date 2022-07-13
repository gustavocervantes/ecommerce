import React, {useState, useEffect} from 'react'
import "./ListCardUser.css"
import CardUser from "../CardUsers/CardUser"

const ListCardUser = () => {
    // estado=>users:[]
    // setUsers=> la func que permite modificar el estado original(users)
    const[users, setUsers]= useState([])
    console.log("DATA",users)
    // le paso un callback, tmb se puede pasar una segunda dependencia
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setUsers(json))
      // ahora le estoy pasando a users la información en consola
    },[])

  return (
    <div className='Cards-List'>
      {users.map((user)=>( 
      // id es una propiedad de la api
        <div key={user.id}>
          <CardUser data={user}/>
        </div>
        ))}
    </div>
  )
}

export default ListCardUser 