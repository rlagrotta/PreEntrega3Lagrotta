import React, { useState } from 'react';
import Item from './Item';

const ItemList = ({ data, onAdd, page, pageData, setPageData }) => {
  const filterData = data.filter((item) => item.category === page);

  


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
          setPageData={setPageData}
        />
      ))}
    </>
  );
};

export default ItemList;