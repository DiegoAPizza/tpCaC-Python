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
