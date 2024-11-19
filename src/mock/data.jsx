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

export const getOneProduct = (id) => {
  let error = false;
  let datas = []  
  return import("../db/db.json")
  .then((json)  => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (error) {
            reject("Hubo un error, intenta más tarde");
          } else {
            resolve(datas)
            const data = datas.find((item) => item.id === id);
            
            if (data) {
              resolve(data);
            } else {
              reject("Producto no encontrado");
            }
          }
        }, 3000);
      });
    })
    .catch(() => {
      throw new Error("Error al importar el archivo JSON");
    });
};