import React, { useState } from 'react';
import Item from './Item';

const ItemList = ({ onAdd, products, category, setSubpage }) => {
  const filterData = products.filter((item) => item.category === category);

  


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
          setSubpage={setSubpage}
        />
      ))}
    </>
  );
};

export default ItemList;