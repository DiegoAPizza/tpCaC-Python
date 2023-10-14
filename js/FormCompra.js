
function validarFormulario() {
   
    var direccion = document.getElementById('direccion').value.trim();
    var ciudad = document.getElementById('inputCity').value.trim();
    var codigoPostal = document.getElementById('inputZip').value.trim();
  
    
    if (direccion === '' || ciudad === '' || codigoPostal === '') {
    
    alert('Por favor, completa todos los campos: Dirección, Ciudad y Código Postal.');
      return false; // Evitar que se envíe el formulario
    }
    else
    alert("Formulario completado correctamente")
    return true;
  }