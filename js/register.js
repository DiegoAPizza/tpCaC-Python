//Validacion de Formulario
const nombre=document.createElement("nombre")
const email=document.createElement("email")
const password=document.createElement("password")
const vector=[1,2,3,4,5,6,7,8,9,0,'1','2','3','4','5','6','7','9','8','0']
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
