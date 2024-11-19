import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import {getProduct} from "../mock/data"

const ItemDetailContainer = ({subpage:id, setSubpage}) => {

  const [product, setProduct] = useState({})
  console.log(id+"hola")

  useEffect(() => {   

    getProduct(id)
    .then((result)=>{
      setProduct(result);
      console.log(result);
      
    })
    .catch((error)=>{
      console.error("Error cargando el json", error);
    })
  
  }, [id])



  return ( 
    
    <ItemDetail product={product} id={id} />
    
  )
}

export default ItemDetailContainer