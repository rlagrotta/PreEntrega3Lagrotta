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
    <div className="card text-center shadow-sm" style={{ width: '18rem', margin: '1rem auto' }}>
      <div className="card-header bg-primary text-white">
        <h5>{greeting}</h5>
      </div>
      <img 
        src="https://via.placeholder.com/150" 
        className="card-img-top" 
        alt="Producto" 
        style={{ padding: '1rem', objectFit: 'cover', borderRadius: '8px' }}
      />
      <div className="card-body">
        <p className="card-text">
          ¡Añade este producto a tu carrito! Solo quedan <strong>{stock}</strong> disponibles.
        </p>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <button className="btn btn-danger mx-2" onClick={restar}>-</button>
          <span className="mx-2 fs-5">{count}</span>
          <button className="btn btn-success mx-2" onClick={sumar}>+</button>
        </div>
        <button className="btn btn-primary w-100" onClick={onAddHandler}>Añadir al carrito</button>
      </div>
      <div className="card-footer text-muted">
        Precio: {precio}
      </div>
    </div>
  );
};

export default ItemCount;