let etiqueta = document.getElementById("cantidadDeProductos");
const btnSumar = document.getElementById("sumar");
const btnRestar = document.getElementById("restar");
const urlParametro = new URLSearchParams(window.location.search);
const idBuscado = parseInt(urlParametro.get("id"));
const contendorProducto = document.getElementById("producto");
const seccionOferta = document.getElementById("seccionOferta");
btnSumar.addEventListener('click', suma);
btnRestar.addEventListener('click', restar);



function cargarProductoPorId(idBuscado) {
    fetch("../js/producto.json")
        .then(response => response.json()) // Convertir la respuesta a JSON
        .then(productos => {
            const productoValidado = productos.find(producto => producto.id === idBuscado);
            let html = `
                <article class="producto">
                    <h2 class="title">${productoValidado.nombre}</h2>
                    <img src="${productoValidado.imagen}" class="imagenDelProducto" alt="">
                    <p class="precioProducto">Precio: ${productoValidado.precio}$</p>
                    <p class="descripcionProducto"> ${productoValidado.descripcion}</p>
                    
                </article>
            `;
            contendorProducto.innerHTML = html

            listaDeProductos = []
            productos.forEach(po => { listaDeProductos.push(po) })
            let html2 = `
            <article class="productosOferta">
            ${productoValidado.id === listaDeProductos[listaDeProductos.length - 1].id
                ? `<a class="itemProducto" href='./producto.html?id=${listaDeProductos[0].id}'>
                      <div class="productoOferta">
                          <picture>
                              <img class="productoOferta_img" src="${listaDeProductos[0].imagen}" alt="producto_oferta"/>
                          </picture>
                          <h5 class="tituloProductoOferta">${listaDeProductos[0].nombre}</h5>
                          <p class="precioOferta">$ ${listaDeProductos[0].precio}Uds</p>
                      </div>
                    </a>`
                : `<a class="itemProducto" href='./producto.html?id=${productoValidado.id + 1}'>
                      <div class="productoOferta">
                          <picture>
                              <img class="productoOferta_img" src="${listaDeProductos[idBuscado + 1].imagen}" alt="producto_oferta"/>
                          </picture>
                          <h5 class="tituloProductoOferta">${listaDeProductos[idBuscado + 1].nombre}</h5>
                          <p class="precioOferta">$ ${listaDeProductos[idBuscado + 1].precio}Uds</p>
                      </div>
                      
                    </a>`
              }
            </article>
            `;
            seccionOferta.innerHTML = html2

        })
        .catch(error => {
            console.error("Error al cargar el archivo JSON:", error);
        });
}
cargarProductoPorId(idBuscado);
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

    } else {
        etiqueta.innerText = valorActual;
    }
}



/*
<article class="productosOferta">
                <a class="itemProducto" href="../index.html">
                    <div class="productoOferta">
                        <picture>
                            <img class="productoOferta_img" src="../style/img/abeja.png.jpg" alt="producto_oferta">
                        </picture>
                        <h5 class="tituloProductoOferta">Nombre_del_Producto</h5>
                        <p class="precioOferta">precio</p>
                    </div>
                </a>
            </article>
            <article class="productosOferta">
                <a class="itemProducto" href="">
                    <div class="productoOferta">
                        <picture>
                            <img class="productoOferta_img" src="../style/img/abeja.png.jpg" alt="producto_oferta">
                        </picture>
                        <h5 class="tituloProductoOferta">Nombre_del_Producto</h5>
                        <p class="precioOferta">precio</p>
                    </div>
                </a>
            </article>
            <article><a class="itemProducto" href="">
                    <div class="producto_oferta">
                        <picture>
                            <img class="productoOferta_img" src="../style/img/abeja.png.jpg" alt="producto_oferta">
                        </picture>
                        <h5 class="tituloProductoOferta">Nombre_del_Producto</h5>
                        <p class="precioOferta">precio</p>
                    </div>
                </a>
            </article> */