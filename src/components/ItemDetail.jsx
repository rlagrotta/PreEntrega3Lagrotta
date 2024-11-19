import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ product, id }) => {
  const onAdd = (cantidad) => {
    console.log(`Agregaste al carrito ${cantidad} productos`);
    
    // Aquí puedes actualizar el estado del carrito, etc.
  };

  // Usar find para encontrar un solo producto
  console.log(`el tipo de dato que recibe itemDetail es ${typeof product instanceof Object}`)
  console.log(product.title+" producto")
  console.log(`${product.title} titulo prueba itemDetail`)
/*   const filteredProduct = product.find((item) => item.id === id); */

  // Si no se encuentra el producto, mostramos un mensaje
 /*  if (!filteredProduct) {
    return <p>Producto no encontrado</p>;
  } */

  return (
    <div>
      <h1>Detalle del producto: {product.title}</h1>
{/*       <img src={filteredProduct.image} alt={filteredProduct.title} />
      <p>{filteredProduct.description}</p>
      <p>${filteredProduct.price}</p>
      <ItemCount stock={filteredProduct.stock} onAdd={onAdd} /> */}
    </div>
  );
};

export default ItemDetail;