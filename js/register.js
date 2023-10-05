//Validacion de Formulario
const nombre=document.createElement("nombre")
const email=document.createElement("email")
const password=document.createElement("password")

//TomarDAtos
const objetoFormulario=document.querySelector('form')
    .addEventListener('submit',(e)=>{
        e.preventDefault()
        const datos=Object.fromEntries(
            new FormData (e.target)
        )
        const expresionReg=/^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.w{2,4})+$/   
        console.log({datos})
        
        
        if(!expresionReg.test(email.value)){
            alert("Escriba Un Mail Valido")
        }
        if(password.value.length<8){
            alert("Contraseña muy corta")
        }
    })
