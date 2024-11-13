import React, { useEffect, useState } from 'react';
/* import ItemCount from './ItemCount'; */
import ItemList from './ItemList';
/* import ItemCount from './ItemCount'; */

const ItemListContainer = ({ page,greeting,fadeIn,setFadeIn }) => {

  const [data, setData] = useState([])



  const onAdd = (cantidad) => {
    alert(`Agregaste al carrito ${cantidad} de productos`);
  };

  useEffect(() => {

    const loadData = new Promise((resolve, reject)=>{
      //simular la carga de datos desde un archivo json
      import("../db/db.json")
      .then((json) =>resolve(json))
      .catch((error)=>reject(error))
    })

    loadData
    .then((result)=>{
      setData(result.default);
    })
    .catch((error)=>{
      console.error("Error cargando el json", error);
    })
  
  }, [page])

  // Promesa que si encuentra products lo desestructura para darselo a map
  

  return (
    <>
    <div className={`d-flex fade flex-wrap ${fadeIn ? 'show' : ''}`} style={{ justifyContent: "space-between", maxWidth: "1200px",margin: "0 auto" }}>
        <ItemList onAdd={onAdd} data={data} page={page}/>
      </div>
    </>

  );
};

export default ItemListContainer;