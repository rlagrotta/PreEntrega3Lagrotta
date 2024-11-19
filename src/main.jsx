import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Hero from './components/Hero';
import ItemDetailContainer from './components/ItemDetailContainer';

function Main() {

  // setea categoría inicial para productos
  const [category, setCategory] = useState("jewelery");
  // Setea categoría inicial para producto independiente
  const [subpage, setSubpage] = useState("1")


  
  console.log(category);

  return (
    <>
      <div></div>
      
      <div className="container"><h1>{category}</h1>
        <NavBar brandname="The Rocket Shop" category={category} setCategory={setCategory}>ddd</NavBar>
      </div>
      <Hero category={category}/>
      <ItemListContainer category={category} subpage={subpage} setSubpage={setSubpage} />
      <ItemDetailContainer subpage={subpage} setSubpage={setSubpage}/>
    </>
  );
}

createRoot(document.getElementById('root')).render(<Main />);