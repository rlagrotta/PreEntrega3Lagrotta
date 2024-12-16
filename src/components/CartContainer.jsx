import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import { CartContext } from '../context/CartContext'

const CartContainer = () => {
  const { cart, clear, cartTotal } = useContext(CartContext)
  return (
    <div>{
      !cart.length ?
        <div>
          <h2>
            Tu carrito está vacio
            <Link to="/">Ir a comprar</Link>
          </h2>
        </div>
        : <div>
          <h2>Tu Carrito!</h2>
          {cart.map((prod) => <CartItem key={prod.id} prod={prod} />)}
          <span>SaldoTotal: {cartTotal()}</span>
          <button className="btn btn-danger" onClick={clear}>Vaciar Carrito</button>
        </div>
    }
    </div>
  )
}

export default CartContainer