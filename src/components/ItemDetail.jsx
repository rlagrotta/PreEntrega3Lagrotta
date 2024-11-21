// ItemDetail.jsx
import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="row g-0">
              {/* Imagen del producto */}
              <div className="col-md-4 text-center my-auto">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="img-fluid rounded-start"
                  style={{ maxHeight: '300px', objectFit: 'contain' }}
                />
              </div>
              {/* Detalles del producto */}
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text text-muted">{item.description}</p>
                  <p className="card-text">
                    <strong>Precio:</strong> ${item.price}
                  </p>
                  <p className="card-text">
                    <strong>Categoría:</strong> {item.category}
                  </p>
                  <p className="card-text">
                    <strong>Stock disponible:</strong> {item.stock}
                  </p>
                  <button className="btn btn-primary mt-3">
                    Agregar al carrito
                  </button>
                </div>
      <ItemCount stock={item.stock}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;