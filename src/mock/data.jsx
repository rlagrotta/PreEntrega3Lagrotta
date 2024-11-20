export const getProducts = () => {

  let error = false;

  return import("../db/db.json").then((json) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (error) {
          reject("Hubo un error, intenta más tarde");
        } else {
          resolve(json);
        }
      }, 3000);
    });
  }).catch(() => {
    throw new Error("Error al importar el archivo JSON");
  });
};


//opcion sencilla
/* export const getOneProduct = (id) => {
  let error = false;
  return import("../db/db.json").then((json) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (error) {
          reject("Hubo un error, intenta más tarde");
        } else {
          resolve(product[id]);
        }
      }, 3000);
    });
  }).catch(() => {
    throw new Error("Error al importar el archivo JSON");
  });
}; */

//opcion 2

// mock/data.jsx
import database from '../db/db.json'; // Importa la base de datos

// Función simulada para obtener un producto por ID con un retraso de 3 segundos
export const getOneProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = database.find((product) => product.id === 1);
      if (product) {
        resolve(product);
      } else {
        reject(new Error("Producto no encontrado."));
      }
    }, 3000); // Retraso de 3 segundos
  });
};