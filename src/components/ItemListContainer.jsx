import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getProducts } from "../mock/data";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ category, setCategory }) => {    
  const [products, setProducts] = useState([]);
  const { categoryParam } = useParams();

  const onAdd = (cantidad) => {
    alert(`Agregaste al carrito ${cantidad} de productos`);
  };

  // Actualiza la categoría según el parámetro de la URL
  useEffect(() => {
    if (categoryParam) {
      setCategory(categoryParam);
    } else {
      setCategory("jewelery");
    }
  }, [categoryParam]);

  // Carga los productos
  useEffect(() => {   
    getProducts()
      .then((result) => {
        setProducts(result.default); // Ajusta si el resultado tiene una estructura diferente
        console.log(result.default);
      })
      .catch((error) => {
        console.error("Error cargando el json", error);
      });
  }, [category]);

  return (
    <div 
      className="d-flex flex-wrap"
      style={{ justifyContent: "space-between", maxWidth: "1200px", margin: "0 auto" }}
    >
      <ItemList onAdd={onAdd} products={products} category={category} />
    </div>
  );
};

export default ItemListContainer;