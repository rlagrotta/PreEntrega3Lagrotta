import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({ stock, onAdd, greeting,precio }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const onAddHandler = () => {
    onAdd(count);
  };

  return (
     <>
          <button className="btn btn-danger mx-2" onClick={restar}>-</button>
          <span className="mx-2 fs-5">{count}</span>
          <button className="btn btn-success mx-2" onClick={sumar}>+</button>
      </>

  );
};

export default ItemCount;