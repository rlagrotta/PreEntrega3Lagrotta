import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Hero from './components/Hero';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

function Main() {

  const [category, setCategory] = useState("jewelery");
  
  console.log(category);

  return (
    <>
      <div></div>      
      <div className="container"><h1>{category}</h1>
        <NavBar brandname="The Rocket Shop" category={category} setCategory={setCategory}>ddd</NavBar>
      </div>
      <Hero category={category}/>
      <ItemListContainer category={category} />
      <ItemDetailContainer id={1}/>
    </>
  );
}

createRoot(document.getElementById('root')).render(<Main />);