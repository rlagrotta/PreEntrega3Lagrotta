import React, { useEffect, useState } from 'react';
/* import ItemCount from './ItemCount'; */
import ItemList from './ItemList';
/* import ItemCount from './ItemCount'; */

const ItemListContainer = ({ page,greeting,fadeIn,setFadeIn }) => {

  const [items, setItems] = useState([])



  const onAdd = (cantidad) => {
    alert(`Agregaste al carrito ${cantidad} de productos`);
  };

  useEffect(() => {
    const fetchItems = () => {
      setTimeout(() => {
      fetch(`https://fakestoreapi.com/products/category/${page}`)
      .then(res => res.json())
      .then((json) => {
        setItems(json); // Guarda los productos en el estado
        setFadeIn(true); // Activa el efecto de fade-in
        console.log(json); // Imprime los productos obtenidos
      })
       // Guarda los productos en el estado
      .catch(err => console.error(err)); // Manejo de errores
  }, 2000);
  };

  fetchItems();
  
  }, [page])

  // Promesa que si encuentra products lo desestructura para darselo a map
  

  return (
    <>
    <div className={`d-flex fade flex-wrap ${fadeIn ? 'show' : ''}`} style={{ justifyContent: "space-between", maxWidth: "1200px",margin: "0 auto" }}>
{/*         <ItemCount greeting={greeting} texto={texto} stock={12} precio={10} onAdd={onAdd} />
        <ItemCount greeting={greeting} texto={texto} stock={12} precio={10} onAdd={onAdd} />
        <ItemCount greeting={greeting} texto={texto} stock={12} precio={10} onAdd={onAdd} />  */}
        <ItemList onAdd={onAdd} items={items}/>
      </div>
    </>

  );
};

export default ItemListContainer;