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



export const getProduct = (id) => {
  let error = false;
  return import("../db/db.json").then((json) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (error) {
          reject("Hubo un error, intenta más tarde");
        } else {
          resolve({json});
        }
      }, 3000);
    });
  }).catch(() => {
    throw new Error("Error al importar el archivo JSON");
  });
};