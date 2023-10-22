
console.log("holaaa team modo minecraft")

const $form = document.querySelector('#formconte')

$form.addEventListener('submit', handlesubmit)

async function handlesubmit(event){
event.preventDeFault()
const form = new FormData(this)
const response= await fetch(this.action ,{
method: this.method,
body: form,
headers:{
    'aceppt': 'aplication/json'
}
})

if (response.ok) {
    this.reset()
    alert('Gracias por contactarnos, pronto responderemos tu consulta. Team MM.')
    }
}





