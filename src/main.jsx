import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';
import Hero from './components/Hero';
import ItemDetailContainer from './components/ItemDetailContainer';

function Main() { // Cambia el nombre a Main
  // Define el estado aquí
  const [page, setPage] = useState("jewelery");
  const [pageData, setPageData] = useState("111")


  
  console.log(page);

  return (
    <>
      <div></div>
      
      <div className="container"><h1>{pageData}</h1>
        {/* Pasa la función setPage a NavBar */}
        <NavBar brandname="The Rocket Shop" page={page} setPage={setPage}>ddd</NavBar>
      </div>
      {/* Pasa el estado page a ItemList */}
      <Hero page={page}/>
      <ItemListContainer page={page} pageData={pageData} setPageData={setPageData} />
      <ItemDetailContainer pageData={pageData}/>
    </>
  );
}

createRoot(document.getElementById('root')).render(<Main />);