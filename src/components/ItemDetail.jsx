import React from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product, onAdd, purchase, itemQuantity }) => {
  const stockActualizado = product.stock - (itemQuantity ? itemQuantity(product.id) : 0);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow border-0">
            <div className="row g-0">
              {/* Imagen del producto */}
              <div className="col-md-5 d-flex align-items-center bg-light rounded-start">
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid rounded"
                  style={{ maxHeight: '350px', objectFit: 'contain' }}
                />
              </div>

              {/* Detalles del producto */}
              <div className="col-md-7">
                <div className="card-body">
                  <h3 className="card-title fw-bold text-primary">{product.title}</h3>
                  <p className="card-text text-muted">{product.description}</p>
                  <hr />
                  <p className="card-text">
                    <strong className="text-dark">Precio:</strong> <span className="text-success">${product.price}</span>
                  </p>
                  <p className="card-text">
                    <strong className="text-dark">Categoría:</strong> {product.category}
                  </p>
                  <p className="card-text">
                    <strong className="text-dark">Stock disponible:</strong> {stockActualizado}
                  </p>

                  {/* Acción del producto */}
                  <div className="mt-4">
                    {purchase ? (
                      <Link to="/cart" className="btn btn-success btn-lg w-100">
                        Ir al carrito
                      </Link>
                    ) : (
                      <ItemCount onAdd={onAdd} stock={stockActualizado} initial={1} id={product.id} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botón para volver */}
          <div className="mt-4 text-center">
            <Link to="/" className="btn btn-outline-primary">
              Volver a la tienda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
