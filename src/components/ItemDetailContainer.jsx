import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import {getOneProduct} from "../mock/data"

const ItemDetailContainer = (id) => {

  const [item, setItem] = useState(id);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Llama a la función para obtener el producto por ID
    getOneProduct(id)
      .then((product) => {
        setItem(product);
        setLoading(false);

        console.log(item);
        console.log(typeof item); // ¿Es "object"?
        console.log(Array.isArray(item)); // ¿Es un array?
        console.log(item.length); // ¿Cuál es su longitud?

        
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return <ItemDetail item={item}  />;
};

export default ItemDetailContainer;