import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({subpage, setSubpage}) => {

  const [producto, setProducto] = useState({})

  useEffect(() => {   

    getProduct(id)
    .then((result)=>{
      setProducto(result);
      console.log(result)
    })
    .catch((error)=>{
      console.error("Error cargando el json", error);
    })
  
  }, [subpage])


  return ( 
    
    <ItemDetail producto={producto} />
    
  )
}

export default ItemDetailContainer