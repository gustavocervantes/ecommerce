import React from 'react'
import Item from './Item'
import ItemListContainer2, {items} from './ItemListContainer/ItemListContainer2'

// recibe los items del array de *ItemListContainer
const ItemList = ({items}) => {
  return (
    <div style={{display:"flex", justifyContent:"center" }}>
        {/* key sirve para identificar los elementos que estás mappeando: es muy re react */}
        {/* siempre tiene que haber un key cada vez que hacemos map */}
        {items.map(item=><Item item={item} key={item.id}/>)}
    </div>
  
    )
}

export default ItemList