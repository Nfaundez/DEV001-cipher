import cipher from './cipher.js';
window.addEventListener("load", inicio, true);
function inicio() {
    document.getElementById("messageencode").addEventListener("keyup", function() {
        this.value = this.value.toUpperCase();
    }, true)
}
let offset = document.getElementById("desplazamiento");
let message = document.getElementById('messageencode');
document.getElementById('encode').addEventListener('click', ()=>{
    const encodedmessage= cipher.encode(offset.value, message.value);
    document.getElementById("messagedecode").value = encodedmessage;
}, )
document.getElementById("decode").addEventListener("click", function(){
    document.getElementById("messagedecode").value = cipher.decode( offset.value, message.value);
}, )


    
   
    
    
   

    
