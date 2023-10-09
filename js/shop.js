document.addEventListener("DOMContentLoaded", function () {

    function cargarJson() {
        fetch("../js/producto.json")
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                let container = document.getElementById("productoPrueba");
                let html=""
                data.forEach(function (producto) {
                    html += `
                    <article class="producto1">
                        <a href="./producto.html?id=${producto.id}">
                                <img src=${producto.imagen} class="imagen1 mejoradorDeImagen">
                        </a>
                            <h4 class="nombreProducto">${producto.nombre}</h4>
                            <h5 class="precioProducto">${producto.precio}</h5>
                    </article>
                `;
                });
                container.innerHTML = html;
            })
            .catch(function (error) {
                console.error("Error al cargar el JSON:", error);
            });
    }

    cargarJson();
});