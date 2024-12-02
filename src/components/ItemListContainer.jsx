import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore'; // Asegúrate de incluir where
import { db } from '../services/firebase';

const ItemListContainer = ({ category, setCategory }) => {    
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryParam } = useParams();

  const onAdd = (cantidad) => {
    alert(`Agregaste al carrito ${cantidad} de productos`);
  };

  // Actualiza la categoría según el parámetro de la URL
  useEffect(() => {
    if (categoryParam) {
      setCategory(categoryParam);
    } else {
      setCategory(null);
    }
  }, [categoryParam]);

  // Firebase
  useEffect(() => {
    setLoading(true);
    // Conectamos con nuestra colección
    const productsCollection = category
      ? query(collection(db, "productos"), where("category", "==", category)) 
      : collection(db, "productos");

    // Pedir documentos
    getDocs(productsCollection)
      .then((res) => {
        const list = res.docs.map((product) => ({
          id: product.id,
          ...product.data(),
        }));
        setProducts(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
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
