let etiqueta = document.getElementById("cantidadDeProductos");
const btnSumar = document.getElementById("sumar");
const btnRestar = document.getElementById("restar");

btnSumar.addEventListener('click', suma);
btnRestar.addEventListener('click',restar);
function suma() {
    // Obtén el valor actual como número
    let valorActual = parseInt(etiqueta.innerText);

    // Suma 1 al valor
    valorActual += 1;

    // Actualiza el contenido de la etiqueta con el nuevo valor
    etiqueta.innerText = valorActual;
}

function restar() {
    let valorActual = parseInt(etiqueta.innerText);
    valorActual -= 1;
    if (valorActual < 0) {
        alert("No se puede reducir mas")
        return false;
    } else {
        etiqueta.innerText = valorActual;
    }
}

function mostrarProductos(datos){
    const articulo=document.getElementById("producto");

    const nombreProducto=document.getElementById("title");
    nombreProducto.textContent=datos.nombre;

    const precio=document.getElementById("precioProducto");
    precio.textContent=datos.precio;

    const descripcionProducto=document.getElementById("descripcionProducto");
    descripcionProducto.textContent=datos.descripcion

    const imagenP = document.getElementById("imagenDelProducto");
    const contenedor = document.getElementById("contendorImg");
    imagenP.src=datos.imagen;
    contenedor.appendChild(imagenP);
    articulo.appendChild(nombreProducto);
    articulo.appendChild(precio);
    articulo.appendChild(descripcionProducto);
    articulo.appendChild(contenedor);
}

fetch("producto.json")
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(datosJSON => {
        // Llamar a la función para mostrar los datos
        mostrarProductos(datosJSON);
    })
    .catch(error => {
        console.error("Error al cargar el archivo JSON:", error);
    });