let etiqueta = document.getElementById("cantidadDeProductos");
const btnSumar = document.getElementById("sumar");
const btnRestar = document.getElementById("restar");
const urlParametro = new URLSearchParams(window.location.search);
const idBuscado = parseInt(urlParametro.get("id"));
const contendorProducto = document.getElementById("producto");

btnSumar.addEventListener('click', suma);
btnRestar.addEventListener('click', restar);



function cargarProductoPorId(id) {
    fetch("../js/producto.json")
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(productos => {
            const productoValidado = productos.find(producto => producto.id === id);
            let html=`
                <article class="producto">
                    <h2 class="title">${productoValidado.nombre}</h2>
                    <img src="${productoValidado.imagen}" class="imagenDelProducto" alt="">
                    <p class="precioProducto">Precio: ${productoValidado.precio}$</p>
                    <p class="descripcionProducto"> ${productoValidado.descripcion}</p>
                </article>
            `;
            contendorProducto.innerHTML=html
        })
        .catch(error => {
            console.error("Error al cargar el archivo JSON:", error);
        });
}
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
    valorStock -= 1;
    if (valorActual < 0 && valorStock < 0) {
        alert("No se puede reducir mas")
        return false;
    } else {
        etiqueta.innerText = valorActual;
    }
}
