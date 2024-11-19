import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ product, id }) => {
  const onAdd = (cantidad) => {
    alert(`Agregaste al carrito ${cantidad} productos`);
  };

  // Filtramos el producto por el id que coincide con el estado page
  const filteredProduct = product.filter((item) => item.id === id)[0];

  // Si no se encuentra el producto, podemos manejarlo con una condición
  if (!filteredProduct) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <h1>Detalle del producto: {filteredProduct.title}</h1>
      <img src={filteredProduct.image} alt={filteredProduct.title} />
      <p>{filteredProduct.description}</p>
      <p>${filteredProduct.price}</p>
      <ItemCount stock={filteredProduct.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;