// ItemDetail.jsx
import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product, onAdd,purchase }) => {
  

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="row g-0">
              {/* Imagen del producto */}
              <div className="col-md-4 text-center my-auto">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="img-fluid rounded-start"
                  style={{ maxHeight: '300px', objectFit: 'contain' }}
                />
              </div>
              {/* Detalles del producto */}
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text text-muted">{product.description}</p>
                  <p className="card-text">
                    <strong>Precio:</strong> ${product.price}
                  </p>
                  <p className="card-text">
                    <strong>Categoría:</strong> {product.category}
                  </p>
                  <p className="card-text">
                    <strong>Stock disponible:</strong> {product.stock}
                  </p>
                </div>
                {purchase ? (
                  <Link className="btn btn-dark">Ir al carrito</Link>
                ) : (
                  <ItemCount onAdd={onAdd} stock={product.stock} initial={1} id={product.id} to="/cart" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
