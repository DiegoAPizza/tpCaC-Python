
function validarFormulario() {
   
    const direccion = document.getElementById('direccion').value.trim();
    const ciudad = document.getElementById('inputCity').value.trim();
    const codigoPostal = document.getElementById('inputZip').value.trim();
    const tarjetaDeCredito=document.getElementById("inputCard").value.trim();
    if(((direccion==null)||(direccion==""))&&(ciudad==null)||(ciudad=="")&&(codigoPostal==null)||(codigoPostal=="")){
      console.log("No se ingreso Correctamente los Datos")
      alert("Porfavor Volver a Ingresar Los datos se encuentran Vacio")
    }
    const expresionRegular = /[a-zA-Z]/;
    if(!expresionRegular.test(tarjetaDeCredito)){
      alert("No se admiten Letras en la Tarjeta de Credito")
    }
    else{
      console.log("Se ingreso Correctamente")
    }
  }