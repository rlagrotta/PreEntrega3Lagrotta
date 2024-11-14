import React from 'react';
import Item from './Item';

const ItemList = ({ data, onAdd, page }) => {
  const filterData = data.filter((item) => item.category === page);

  return (
    <>
      {filterData.map((item) => (
        <Item
          key={item.id}
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