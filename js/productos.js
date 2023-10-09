let etiqueta = document.getElementById("cantidadDeProductos");
const btnSumar = document.getElementById("sumar");
const btnRestar = document.getElementById("restar");
const urlParametro = new URLSearchParams(window.location.search);
const idBuscado = parseInt(urlParametro.get("id"));
const contendorProducto=document.getElementById("producto");

btnSumar.addEventListener('click', suma);
btnRestar.addEventListener('click', restar);

function cargarProductoPorId(id) {
    fetch("producto.json")
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(productos => {
            // Buscar el producto por su ID
            const productoEncontrado = productos.find(producto => producto.id === id);

            if (productoEncontrado) {
                // Actualizar la información del producto en la página
                document.getElementById("nombreProducto").innerText = productoEncontrado.nombre;
                document.getElementById("descripcionProducto").innerText = productoEncontrado.descripcion;
                document.getElementById("precioProducto").innerText = `$${productoEncontrado.precio}`;
                // ... Agrega más campos según sea necesario
            } else {
                // El producto no fue encontrado
                console.log("Producto no encontrado");
            }
        })
        .catch(error => {
            console.error("Error al cargar el archivo JSON:", error);
        });
}
// Llama a la función para cargar el producto por su ID
cargarProductoPorId(idBuscado);

function suma(valorStock) {
    // Obtén el valor actual como número
    let valorActual = parseInt(etiqueta.innerText);

    // Suma 1 al valor
    valorActual += 1;

    // Actualiza el contenido de la etiqueta con el nuevo valor
    etiqueta.innerText = valorActual;
}

function restar(valorStock) {
    let valorActual = parseInt(etiqueta.innerText);
    valorStock-=1;
    if (valorActual < 0&&valorStock<0) {
        alert("No se puede reducir mas")
        return false;
    } else {
        etiqueta.innerText = valorActual;
    }
}
