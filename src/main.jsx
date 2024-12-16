import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Hero from './components/Hero';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';
import CheckoutUseForm from './components/CheckoutUseForm';

function Main() {
  // Define el estado de `category`
  const [category, setCategory] = useState("jewelery");

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar brandname="The Rocket Shop" category={category} setCategory={setCategory} />
        <Routes>
          <Route path="/" element={<ItemListContainer category={category} setCategory={setCategory} />} />
          <Route path="/category/:id" element={<ItemListContainer category={category} setCategory={setCategory} />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<CheckoutUseForm/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

createRoot(document.getElementById('root')).render(<Main />);
