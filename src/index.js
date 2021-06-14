import cipher from './cipher.js';

const encodeButton = document.querySelector('#encode_button');
let inputEncode = document.querySelector('#input_encode');
let offsetEncode = document.querySelector('#offset_encode');
let encodeText = document.querySelector('#encrypted_text');

const decodeButton = document.querySelector('#decode_button');
let inputDecode = document.querySelector('#input_decode');
let offsetDecode = document.querySelector('#offset_decode');
let decodeText = document.querySelector('#decrypted_text');

const clearEncode = document.querySelector('#bota_limpar_encode');
const clearDecode = document.querySelector('#bota_limpar_decode');

encodeButton.addEventListener('click', (event) => {
    event.preventDefault()

    const crypt = inputEncode.value.trim();
    const encodeKey = offsetEncode.value;
  
    const encodeResult = cipher.encode(encodeKey,crypt);

    if(crypt === '') {
        alert("Por favor, digite uma mensagem.");
    } else {
        encodeText.innerHTML += encodeResult;
        inputEncode.value = "";
        offsetEncode.value = "";
    }
})

decodeButton.addEventListener('click', (event) => {
    event.preventDefault();

    const decrypt = inputDecode.value.trim();
    const decodeKey = offsetDecode.value;

    const decodeResult = cipher.decode(decodeKey, decrypt);

    if(decrypt === '') {
        alert("Por favor, digite uma mensagem.");
    } else {
        decodeText.innerHTML += decodeResult;
        inputDecode.value = "";
        offsetDecode.value = "";
    }
})

clearEncode.addEventListener('click', (event) => {
    event.preventDefault();

    encodeText.innerHTML = "";
})

clearDecode.addEventListener('click', (event) => {
    event.preventDefault();

    decodeText.innerHTML = "";
})

// console.log(cipher);
// console.log(cipher.encode("Patricia Barnabe", 3))
// console.log(cipher.decode("Sdwulfld Eduqdeh", 3))
// console.log(cipher.encode("Patricia Barnabe", 33))
// console.log(cipher.decode("Whaypjph Ihyuhil", 33))
// console.log(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 33))
// console.log(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33))
// console.log(cipher.encode("abcdefghijklmnopqrstuvwxyz", 33))
// console.log(cipher.decode("hijklmnopqrstuvwxyzabcdefg", 33))
