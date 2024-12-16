import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({ stock, onAdd, id }) => {
  const [count, setCount] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false); // Estado para manejar si el ítem fue agregado
  const navigate = useNavigate();

  const handleRegresar = () => navigate('/');

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
    setAddedToCart(true); // Marcar como agregado al carrito
  };

  const goToCheckout = () => {
    navigate('/checkout'); // Navegar a la página de checkout
  };

  return (
    <>
      <div>
        {stock === 0 && <p>Lo sentimos, ya no hay más stock disponible</p>}
      </div>
      <button disabled={count <= 1} className="btn btn-danger mx-2" onClick={restar}>
        -
      </button>
      <span className="mx-2 fs-5">{count}</span>
      <button
        disabled={count >= stock}
        className="btn btn-success mx-2"
        onClick={sumar}
      >
        +
      </button>
      <p>{`Disponibles en stock: ${stock}`}</p>
      <div>
        {!addedToCart ? ( // Mostrar "Agregar al carrito" solo si no está agregado
          <button onClick={onAddHandler} className="btn btn-primary mt-3">
            Agregar al carrito
          </button>
        ) : (
          <button onClick={goToCheckout} className="btn btn-success mt-3">
            Ir al checkout
          </button>
        )}
        <button className="btn btn-danger mx-2 mt-3" onClick={handleRegresar}>
          Regresar
        </button>
      </div>
    </>
  );
};

export default ItemCount;
