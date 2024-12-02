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
import 'bootstrap';
/* import { CartProvider } from './context/CartContext'; */

function Main() {
  // Define el estado de `category`
  const [category, setCategory] = useState("jewelery");

  return (
    <>
{/*     <CartProvider> */}
      <BrowserRouter>
        <div className="container">
          <h1>{category}</h1>
          <NavBar brandname="The Rocket Shop" category={category} setCategory={setCategory} />
        </div>
        {/* <Hero category={category} setCategory={setCategory} /> */}
        <Routes>
        <Route 
          path="/" 
          element={<ItemListContainer
            category={category}
            setCategory={setCategory}
            />} 
        />
          <Route path="/category/:id" 
          element={<ItemListContainer
          category={category}
           setCategory={setCategory}
            />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
{/*       </CartProvider> */}
    </>
  );
}

createRoot(document.getElementById('root')).render(<Main />);