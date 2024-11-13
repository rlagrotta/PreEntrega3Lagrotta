import React from 'react';
import Item from './Item';

const ItemList = ({ data, onAdd, page}) => {
  return (
    <>
      {data.map((data) => (
        <Item
          key={data.id}
          title={data.title}
          precio={data.price} 
          imagen={data.image}
          alt={data.title}
          style={{ width: "100px" }}
          onAdd={onAdd}
        />
      ))}
    </>
  );
};

export default ItemList;