//Validacion de Formulario
const nombre = document.createElement("nombre")
const email = document.createElement("email")
const password = document.createElement("password")

//TomarDAtos
const objetoFormulario = document.querySelector('form');

objetoFormulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const datos = Object.fromEntries(new FormData(e.target));

    const expresionReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    console.log({ datos });

    if (!expresionReg.test(datos.email)) {
        alert("Escriba un correo válido");
    }
    if (datos.password.length < 8) {
        alert("Contraseña muy corta");
    }
});
