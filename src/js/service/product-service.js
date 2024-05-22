//* Hace fetch a la api y devuelve el resultado como json
const productList = async () => {
  try {
    const res = await fetch(
      "https://664d000aede9a2b556525afb.mockapi.io/api/productsList"
    );
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

//* Hace fetch a la api como metodo post y devuelve el resultado como json
const crearProducto = async (nombre, precio, imagen) => {
  try {
    const res = await fetch(
      "https://664d000aede9a2b556525afb.mockapi.io/api/productsList",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          precio,
          imagen,
        }),
      }
    );
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

//* Hace fetch a la api como metodo delete y devuelve el resultado como json
const borrarProducto = async (id) => {
  try {
    const res = await fetch(
      `https://664d000aede9a2b556525afb.mockapi.io/api/productsList/${id}`,
      {
        method: "DELETE",
      }
    );
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

//* Exporta las funciones
export const servicesProducts = {
  productList,
  crearProducto,
  borrarProducto,
};
