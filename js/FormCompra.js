var direccion =document.getElementById("inputAddress");
var ciudad = document.getElementById("inputCity")
var postal = document.getElementById("inputZip")
var numTarjeta= document.getElementById("inputCard")
var formulario= document.getElementById("Form")
//En esta Validacion verificamos que contenga Letras 
formulario.addEventListener("submit", e=>{
    let verficarDirecion=/\b\w+\b/
    e.preventDefault()
    if((direccion==null||direccion.innerHTML=="")){
        alert("Porfavor complete la direccion")
    }
    if(((ciudad==null||ciudad.innerHTML=="")&& !verficarDirecion.test(ciudad))){
        alert("Ingre una Ciudad Correcta")
    }
    let exprecionRegularNum= /^\d+$/
    if(!exprecionRegularNum.test(numTarjeta)){
        alert("Numero de tarjeta invalido, por favor ingrese un numero valido.")
    }
})
    