var direccion =document.getElementById("inputAddress");
var ciudad = document.getElementById("inputCity")
var postal = document.getElementById("inputZip")
var numTarjeta= document.getElementById("inputCard")

var formulario= document.getElementById("Form")

formulario.addEventListener("submit", e=>{
    e.preventDefault()
    if(direccion==null){
        alert("Porfavor complete la direccion")
    }


})
    