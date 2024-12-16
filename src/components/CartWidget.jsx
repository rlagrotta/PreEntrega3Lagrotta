import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { cartQty } = useContext(CartContext)
  return (<>
    <div className="shopcart-container">
      {cartQty() > 0 &&
        <p className={{ "margin": "auto" }}>{cartQty()}</p>}
      <Link to={"/cart"}><img src="/shop-cart.png" alt="Logo" style={{ "height": "40px" }} /></Link>
    </div>
  </>
  )
}

export default CartWidget