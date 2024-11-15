import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetailDesign = ({pageData, title, category, price, description,id,item}) => {

  console.log(item)
  console.log(`${pageData} es el estado de la pagina`)

  return (
    <>
    <div> {id}</div>
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="path/to/your/image.jpg"
            alt="Producto"
            className="img-fluid rounded shadow-sm"
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-primary mb-3">{title}</h2>
          <p className="text-muted">Categoría: <span className="text-dark">{category}</span></p>
          <h4 className="text-success">Precio: {price}</h4>
          <p className="my-4">{description}</p>
          <div className="d-flex align-items-center mb-3">
            <button className="btn btn-danger mx-2">-</button>
            <span className="mx-2 fs-5">1</span>
            <button className="btn btn-success mx-2">+</button>
          </div>
          <button className="btn btn-primary w-100 mt-3">Añadir al carrito</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default ItemDetailDesign