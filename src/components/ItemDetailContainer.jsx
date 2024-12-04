import React, { useContext, useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getOneProduct } from "../mock/data";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { CartContext } from '../context/CartContext';

const ItemDetailContainer = () => {
  const {addItem}=useContext(CartContext)
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Inicializado como null
  const [purchase, setPurchase] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const onAdd = (cantidad) => {
    setPurchase(true)
    addItem(product,cantidad)
  };

  //FIREBASE

  useEffect(() => {
    setLoading(true)
    //collection y project firebase
    const collectionProd = collection(db,"productos")
    //creamos una referencia
    const docRef = doc(collectionProd,id)
    //traer documento
    getDoc(docRef)
    .then((res)=>setProduct({id:res.id, ...res.data()}))
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false))

  }, [])
  

/*   useEffect(() => {
    // Llama a la función para obtener el producto por ID
    setLoading(true); // Reinicia el estado de carga para cada cambio de ID
    getOneProduct(id)
      .then((product) => {
        setItem(product); // Asigna el producto al estado
        setLoading(false); // Cambia el estado de carga
        console.log("Producto obtenido:", product); // Depura el producto
      })
      .catch((err) => {
        setError(err.message); // Maneja errores
        setLoading(false);
      });
  }, [id]); // Se ejecutará cada vez que cambie el ID
 */
  if (loading) {
    return <p style={{ textAlign: "center" }}>Cargando producto...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return product ? (
    <ItemDetail onAdd={onAdd} product={product} />
  ) : (
    <p>No se encontró el producto.</p>
  );
};

export default ItemDetailContainer;
