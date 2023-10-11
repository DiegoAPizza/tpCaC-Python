var direccion =document.getElementById("inputAddress").ariaValueMax.trim();
var ciudad = document.getElementById("inputCity")
var postal = document.getElementById("inputZip")
var numTarjeta= document.getElementById("inputCard")

var formulario= document.getElementById("Form")

formulario.addEventListener("submit", e=>{
    e.preventDefault()
    if(direccion.ariaValueMax.length===0){
        alert("Porfavor complete la direccion")
    }


})
    