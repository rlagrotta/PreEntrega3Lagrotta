import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartItem = ({ prod }) => {
  const { removeItem } = useContext(CartContext)
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2rem" }}>
      <img src={prod.image} alt={prod.title} style={{ width: "10rem" }} />
      <span>{prod.title}</span>
      <span>Cantidad: {prod.qty}</span>
      <span>Precio: {prod.price}</span>
      <button className='btn btn-danger' onClick={() => removeItem(prod.id)}>x</button>
    </div>
  )
}

export default CartItem