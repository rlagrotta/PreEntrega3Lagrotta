import React, { useState } from 'react';
import ItemDetailD from './ItemDetailD';

const ItemDetail = ({data, page, pageData, setPageData, item }) => {
  const filterData = data.filter((item) => item.id === pageData);

  


  return (
    <>
      {filterData.map((item) => (
        <ItemDetailD
          key={item.id}
          pageData={pageData}
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

export default ItemDetail;