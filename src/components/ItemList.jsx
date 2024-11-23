import React from 'react';
import Item from './Item';

const ItemList = ({ onAdd, products, category}) => {
  // Condicional para manejar el filtro
  const filterData = category 
    ? products.filter((item) => item.category === category) // Filtra si hay categoría
    : products; // Muestra todo si no hay categoría

  return (
    <>    
      {filterData.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          precio={item.price}
          imagen={item.image}
          alt={item.title}
          style={{ width: "100px" }}
          onAdd={onAdd}
          stock={item.stock}
        />
      ))}
    </>
  );
};

export default ItemList;