import cipher from './cipher.js';
let offset = document.getElementById("desplazamiento");
const message = document.getElementById('messageencode');
document.getElementById('encode').addEventListener('click', ()=>{
    const encodedmessage= cipher.encode(offset.value, message.value);
    console.log (encodedmessage)
    document.getElementById("messagedecode").value = encodedmessage;
}, )
document.getElementById("decode").addEventListener("click", function(){
   
    document.getElementById("messagedecode").value = cipher.decode( offset.value, message.value);
}, )
    
    
   
// aqui se dio funcion al boton codificar con click
    // debo llamar aqui al boton del offset

    

  // aqui se dio funcion al boton decodificar con click
    // debo arreglar que esto pase en messagecode
    
