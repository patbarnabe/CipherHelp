import cipher from './cipher.js';

const encodeButton = document.querySelector('#encode_button');
const inputEncode = document.querySelector('#input_encode');
const offsetEncode = document.querySelector('#offset_encode');
const encodeText = document.querySelector('#encrypted_text');

const decodeButton = document.querySelector('#decode_button');
const inputDecode = document.querySelector('#input_decode');
const offsetDecode = document.querySelector('#offset_decode');
const decodeText = document.querySelector('#decrypted_text');

const clearEncode = document.querySelector('#bota_limpar_encode');
const clearDecode = document.querySelector('#bota_limpar_decode');

encodeButton.addEventListener('click', (event) => {
    event.preventDefault()

    const crypt = inputEncode.value.trim();
    const encodeKey = offsetEncode.value;
  
    const encodeResult = cipher.encode(encodeKey,crypt);

    encodeText.innerHTML += encodeResult;
    inputEncode.value = "";
    offsetEncode.value = "";
})

decodeButton.addEventListener('click', (event) => {
    event.preventDefault();

    const decrypt = inputDecode.value.trim();
    const decodeKey = offsetDecode.value;

    const decodeResult = cipher.decode(decodeKey, decrypt);

    decodeText.innerHTML += decodeResult;
    inputDecode.value = "";
    offsetDecode.value = "";

})

clearEncode.addEventListener('click', (event) => {
    event.preventDefault();

    encodeText.innerHTML = "";
})

clearDecode.addEventListener('click', (event) => {
    event.preventDefault();

    decodeText.innerHTML = "";
})

