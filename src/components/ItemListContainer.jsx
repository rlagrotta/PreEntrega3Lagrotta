import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import {getProducts} from "../mock/data"

const ItemListContainer = ({category}) => {

  const [products, setProducts] = useState([])

  const onAdd = (cantidad) => {
    alert(`Agregaste al carrito ${cantidad} de productos`);
  };

  useEffect(() => {   

    getProducts()
    .then((result)=>{
      setProducts(result.default);
      console.log(result.default)
    })
    .catch((error)=>{
      console.error("Error cargando el json", error);
    })
  
  }, [category])


  return (
    <>
    <div className={`d-flex flex-wrap `} style={{ justifyContent: "space-between", maxWidth: "1200px",margin: "0 auto" }}>
        <ItemList onAdd={onAdd} products={products} category={category} />
      </div>
    </>

  );
};

export default ItemListContainer;