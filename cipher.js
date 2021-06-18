//const LETTER_A = "A".charCodeAt()

const cipher = {
  encode: (offset, string) => {
    offset = offset % 26;
    let encryptedText = "";
    let encryptedCode;

    if (string == "" || string == null || offset == "" || offset == null) {
      throw new TypeError("Argumentos inválidos", "cipher.js");
    } else {
      for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
          encryptedCode = ((string.charCodeAt(i) - 65 + offset) % 26) + 65;
        } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
          encryptedCode = ((string.charCodeAt(i) - 97 + offset) % 26) + 97;
        } else if (string.charCodeAt(i) === 32) {
          encryptedCode = 32;
        } else if (string.charCodeAt(i) >= 33 && string.charCodeAt(i) <= 64) {
          encryptedCode = string.charCodeAt(i);
        } else if (string.charCodeAt(i) >= 91 && string.charCodeAt(i) <= 96) {
          encryptedCode = string.charCodeAt(i);
        } else if (string.charCodeAt(i) >= 123 && string.charCodeAt(i) <= 127) {
          encryptedCode = string.charCodeAt(i);
        } else if (string === "ç" || string === "Ç") {
          encryptedCode = 63;
        }
        // else {
        //   encryptedCode += string.charCodeAt(i);
        // }
        encryptedText += String.fromCharCode(encryptedCode);
      }
      return encryptedText;
    }
  },

  decode: (offset, string) => {
    offset = offset % 26;
    let decryptedText = "";
    let decryptedCode;

    if (string == "" || string == null || offset == "" || offset == null) {
      throw new TypeError("Argumentos inválidos", "cipher.js");
    } else {
      for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
          decryptedCode = ((string.charCodeAt(i) - 90 - offset) % 26) + 90;
        } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
          decryptedCode = ((string.charCodeAt(i) - 122 - offset) % 26) + 122;
        } else if (string.charCodeAt(i) === 32) {
          decryptedCode = 32;
        } else if (string.charCodeAt(i) >= 33 && string.charCodeAt(i) <= 64) {
          decryptedCode = string.charCodeAt(i);
        } else if (string.charCodeAt(i) >= 91 && string.charCodeAt(i) <= 96) {
          decryptedCode = string.charCodeAt(i);
        } else if (string.charCodeAt(i) >= 123 && string.charCodeAt(i) <= 127) {
          decryptedCode = string.charCodeAt(i);
        } else if (string === "ç" || string === "Ç") {
          decryptedCode = 63;
        }
        // else {
        //   decryptedCode += string.charCodeAt(i);
        // }
        decryptedText += String.fromCharCode(decryptedCode);
      }
      return decryptedText;
    }
  },

  // Alternativa para a função cipher.decode()
  // decode: (string, offset) => {
  // let decryptedText = "";

  // offset = (26 - offset) % 26;
  // decryptedText = cipher.encode(string, offset)
  // return decryptedText;
  // }
};

export default cipher;
