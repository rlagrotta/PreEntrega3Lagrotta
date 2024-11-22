import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router";

const Item = ({ stock, onAdd, precio, title, imagen, id}) => {
  const [count, setCount] = useState(1);

  const navigate = useNavigate()


  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const onAddHandler = () => {
    onAdd(count);
  };

  const onMoreHandler = () => {
    
  };


  return (
    <div className="card text-center shadow-sm" style={{ width: '18rem', margin: '1rem auto' }}>
      <div className="card-header bg-primary text-white">
        <h5>{/* {title} */}</h5>
      </div>
      <img 
        src={imagen}
        className="card-img-top" 
        alt="Producto" 
        style={{
          width: '100%',         // Ancho al 100% del contenedor de la tarjeta
          height: '200px',        // Altura fija para todas las imágenes
          objectFit: 'cover',     // Mantiene la proporción de la imagen
          borderRadius: '8px'
        }}
      />
      <div className="card-body">
        <p className="card-text">
          {title}
        </p>
        <div className="d-flex justify-content-center align-items-center mb-3">
        </div>Precio: {precio}    
      </div>
      <div className="card-footer text-muted">
      <button className="btn btn-secondary w-100 mt-1" value={title} onClick={()=>
      {
        navigate(`/item/${id}`)
      }
      }>Ver mas info</button>
      </div>

    </div>
  );
};

export default Item;
