
const btn = document.getElementById("submit");
const btnChek = document.getElementById("gridCheck");
const msg = document.getElementById("mensaje");

btn.addEventListener("click", validarFormulario);

function validarFormulario() {
  const direccion = document.getElementById('direccion').value.trim();
  const ciudad = document.getElementById('inputCity').value.trim();
  const codigoPostal = document.getElementById('inputZip').value.trim();
  const tarjetaDeCredito = document.getElementById("inputCard").value.trim();
  if (((direccion == null) || (direccion == ""))) {
    console.log("No se ingreso Correctamente los Datos")
    alert("Porfavor Volver a Ingresar Los datos se encuentran Vacio")
  }
  if ((codigoPostal == null) || (codigoPostal == "")) {
    console.log("No se ingresó el Codigo Postal");
  }
  if ((ciudad == null) || (ciudad == "")) {
    console.log("No se ingreso Correctamente los Datos")
  }
  const expresionRegular = /[a-zA-Z]/;
  if (tarjetaDeCredito == null || tarjetaDeCredito === "") {
    alert("Ingrese su Tarjeta de Credito Para continuar con la operacion")

  }
  if(!btnChek.checked){
    msg.innerText = 'El elemento está No marcado';
  }
  else if (expresionRegular.test(tarjetaDeCredito)) {
    alert("No se admiten Letras en la Tarjeta de Credito")
  }
  else {
    console.log("Se ingreso Correctamente")
  }
}