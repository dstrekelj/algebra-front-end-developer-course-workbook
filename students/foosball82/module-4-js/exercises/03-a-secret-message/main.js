function caesarCipher(input, shift) {
  if (typeof input !== "string") {
    return "Please input a string with only A-Z characters for input parameter!";
  }

  const regex = /[A-Z]/g;
  const chars_A_to_Z = input.match(regex);

  if (chars_A_to_Z === null || input.length !== chars_A_to_Z.length) {
    return "Please input a string with only A-Z characters for input parameter!";
  }

  if (!Number.isInteger(shift)) {
    return "Please input an integer for shift parameter!";
  }

  var encrypted = "";
  var charCode;
  for (var i = 0; i < input.length; i++) {
    charCode = input.charCodeAt(i) + (shift % 26);
    if (charCode > 90) {
      charCode = charCode - 26;
    }
    if (charCode < 65) {
      charCode = charCode + 26;
    }
    encrypted = encrypted + String.fromCharCode(charCode);
  }
  return encrypted;
}

console.log(caesarCipher("HOWAMIDOINGSOFAR", 4));
console.log(caesarCipher("MJCSYGERVIEHXLMWCSYEVIHSMRKKVIEX", -4));
