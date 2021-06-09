const cipher = {
    encode: (string, offset) => {
    offset = offset % 26;
    let encryptedText = "";
    let encryptedCode;

    for(let i=0; i<string.length; i++) {
      if (string.charCodeAt(i) >=65 && string.charCodeAt(i) <= 90) {
        encryptedCode = (((string.charCodeAt(i) - 65) + offset) % 26) + 65;
      }
      else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        encryptedCode = (((string.charCodeAt(i) - 97) + offset) % 26) + 97;
      }
      else if (string.charCodeAt(i) === 32) {
        encryptedCode = 32;
      }
      else {
        encryptedCode += string.charCodeAt(i);
      }
      encryptedText += String.fromCharCode(encryptedCode);
    }
    return encryptedText;
  },

  decode: (string, offset) => {
    offset = offset % 26;
    let decryptedText = "";
    let decryptedCode;

    for(let i=0; i<string.length; i++) {
      if (string.charCodeAt(i) >=65 && string.charCodeAt(i) <= 90) {
        decryptedCode = (((string.charCodeAt(i) - 65) - offset) % 26) + 65;
      }
      else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        decryptedCode = (((string.charCodeAt(i) - 97) - offset) % 26) + 97;
      }
      else if (string.charCodeAt(i) === 32) {
        decryptedCode = 32;
      }
      else {
        decryptedCode += string.charCodeAt(i);
      }
      decryptedText += String.fromCharCode(decryptedCode);
    }
    return decryptedText;
  }

    // Alternativa para a função cipher.decode()
    // decode: (string, offset) => {
    // let decryptedText = "";

    // offset = (26 - offset) % 26;
    // decryptedText = cipher.encode(string, offset)
    // return decryptedText;
    //}
};

export default cipher;
