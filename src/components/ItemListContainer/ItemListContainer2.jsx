import React from 'react'
import{useState, useEffect} from "react"
import ItemCount from '../ItemCount/ItemCount'
// import ItemCount2 from '../ItemCount2/ItemCount2'

const ItemListContainer2 = () => {
    // -----------------------------------
    const onAdd =(count)=>{
        alert("compraste:" +count)
    }

    const [items, setItems]= useState([])

    const productos=[
        {id:1, name:"producto1", price:100, stock:10, image:"https://static.dafiti.com.ar/p/polo-label-8752-584548-1-product.jpg"},
        {id:2, name:"producto2", price:200, stock:11, image:"https://static.dafiti.com.ar/p/polo-label-8752-584548-1-product.jpg"},
        {id:3, name:"producto3", price:300, stock:12, image:"https://static.dafiti.com.ar/p/polo-label-8752-584548-1-product.jpg"}
    ]

    const task = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    
    })

    // const getTask = async()=>{
    //     try {
    //        let resolve = await task 
    //        setItems(resolve)
    //     }catch(error){
    //         console.log(error)
    //     }
    // }

    // useEffect(()=>{
    //     getTask()
    // },[])

    useEffect(()=>{
        task.then(resolve=>setItems(resolve))
        .catch(error=>console.log(error))
    }, [])

    console.log(items)

  return (
    <div style={{textAlign:"center", marginTop:200}}>
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        {/* <ItemCount2 initial={1} stock={10} onAdd={onAdd}/> */}
        {/* a ItemList le tengo que pasar por props los objetos del */}
        <itemList items={items}/>
    </div>
  )
}

export default ItemListContainer2