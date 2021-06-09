import cipher from './cipher.js';

const encodeButton = document.querySelector('#encode_button');
let inputEncode = document.querySelector('#input_encode').value;
let offsetEncode = document.querySelector('#offset_encode').value;
//let encryptedText = document.querySelector('#encrypted_text').value;

const decodeButton = document.querySelector('#decode_button');
let inputDecode = document.querySelector('#input_decode').value;
let offsetDecode = document.querySelector('#offset_decode').value;
//let decryptedText = document.querySelector('#decrypted_text').value;

encodeButton.addEventListener('click', (event) => {
    event.preventDefault()

    cipher.encode(inputEncode, offsetEncode)
})

decodeButton.addEventListener('click', (event) => {
    event.preventDefault()

    cipher.decode(inputDecode, offsetDecode)
})


console.log(cipher);
console.log(cipher.encode("Patricia Barnabe", 3))
console.log(cipher.decode("Sdwulfld Eduqdeh", 3))
console.log(cipher.encode("Patricia Barnabe", 33))
console.log(cipher.decode("Whaypjph Ihyuhil", 33))
console.log(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 33))
console.log(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33))
console.log(cipher.encode("abcdefghijklmnopqrstuvwxyz", 33))
console.log(cipher.decode("hijklmnopqrstuvwxyzabcdefg", 33))
