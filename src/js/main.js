const listProducts = document.getElementById("listProducts");
const form = document.getElementById("form");

import { servicesProducts } from "./service/product-service.js";

//* Listar productos
servicesProducts.productList().then((products) => {
  products.forEach((product) => {
    listProducts.innerHTML += htmlSctructure(
      product.nombre,
      product.precio,
      product.imagen,
      product.id
    );
  });
  loadButtons();
});

//* Crear producto
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  //* crear producto en la api
  const nuevoProducto = await servicesProducts.crearProducto(
    e.target.nombre.value,
    e.target.precio.value,
    e.target.imagen.value
  );
  //* mostrar producto en la lista html
  mostrarProductoNuevo(
    e.target.nombre.value,
    e.target.precio.value,
    e.target.imagen.value,
    nuevoProducto.id
  );
  form.reset();
  loadButtons();
});

//* función mostrar producto en la lista html
const mostrarProductoNuevo = (nombre, precio, imagen, id) => {
  listProducts.innerHTML += htmlSctructure(nombre, precio, imagen);
};

//* Estructura html para mostrar productos
const htmlSctructure = (nombre, precio, imagen, id) => {
  return `
    <li id="${id}">
        <img src="${imagen}" alt="${nombre} image">
        <h2>${nombre}</h2>
        <div class="productInfo">
            <p>$ ${precio}</p>
            <img id="buttonDelete" src="./assets/trashIcon.png" alt="trash Icon">
        </div>
    </li>
    `;
};

//* Función cargar botones para borrar productos
const loadButtons = () => {
  const buttonDelete = document.querySelectorAll("#buttonDelete");
  buttonDelete.forEach((button) => {
    button.addEventListener("click", (e) => {
      servicesProducts.borrarProducto(e.target.parentElement.parentElement.id);
      e.target.parentElement.parentElement.remove();
    });
  });
};
