import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { CartContext } from '../context/CartContext';

const CartContainer = () => {
  const { cart, clear, cartTotal } = useContext(CartContext);

  return (
    <div className="container mt-5">
      {/* Si el carrito está vacío */}
      {!cart.length ? (
        <div className="text-center mt-5">
          <h2 className="text-secondary">Tu carrito está vacío</h2>
          <p className="mt-3">Parece que no has agregado productos aún.</p>
          <Link to="/" className="btn btn-primary btn-lg">
            Ir a comprar
          </Link>
        </div>
      ) : (
        /* Si hay productos en el carrito */
        <div>
          <h2 className="mb-4">Tu Carrito</h2>
          <div className="list-group">
            {cart.map((prod) => (
              <CartItem key={prod.id} prod={prod} />
            ))}
          </div>
          <div className="mt-4">
            <h4 className="text-end">
              <strong>Total:</strong> <span className="text-success">${cartTotal()}</span>
            </h4>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-outline-danger" onClick={clear}>
              Vaciar Carrito
            </button>
            <Link to="/checkout" className="btn btn-success">
              Ir al Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
