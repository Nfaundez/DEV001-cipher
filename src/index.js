import cipher from './cipher.js';

document.getElementById('code').addEventListener('click', ()=>{
    const message = document.getElementById('message').value;
    console.log(message)
})
console.log(cipher);
