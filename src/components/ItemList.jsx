import React from 'react';
import Item from './Item';

const ItemList = ({ items, onAdd }) => {
  return (
    <>
      {items.map((item) => (
        <Item
          key={item.id}
          title={item.title}
          precio={item.price}
          imagen={item.image}
          alt={item.title}
          style={{ width: "100px" }}
          onAdd={onAdd}
        />
      ))}
    </>
  );
};

export default ItemList;