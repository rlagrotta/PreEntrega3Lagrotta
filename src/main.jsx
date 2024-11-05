import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';
import Hero from './components/Hero';

function Main() { // Cambia el nombre a Main
  // Define el estado aquí
  const [page, setPage] = useState("jewelery");
  const [fadeIn, setFadeIn] = useState(false);

  
  console.log(page);

  return (
    <>
      <div>123</div>
      <div className="container">ddd
        {/* Pasa la función setPage a NavBar */}
        <NavBar brandname="The Rocket Shop" page={page} setPage={setPage} fadeIn={fadeIn} setFadeIn={setFadeIn}>ddd</NavBar>
      </div>
      {/* Pasa el estado page a ItemList */}
      <Hero page={page}/>
      <ItemListContainer page={page} fadeIn={fadeIn} setFadeIn={setFadeIn} />
    </>
  );
}

createRoot(document.getElementById('root')).render(<Main />);