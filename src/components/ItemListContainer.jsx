import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({ greeting, texto }) => {
  const onAdd = (cantidad) => {
    alert(`Agregaste al carrito ${cantidad} de productos`);
  };

  return (
    <>
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <ItemCount greeting={greeting} texto={texto} stock={12} precio={10} onAdd={onAdd} />
        <ItemCount greeting={greeting} texto={texto} stock={12} precio={10} onAdd={onAdd} />
        <ItemCount greeting={greeting} texto={texto} stock={12} precio={10} onAdd={onAdd} />
      </div>
    </>
  );
};

export default ItemListContainer;