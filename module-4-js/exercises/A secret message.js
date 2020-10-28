var input = 'MJCSYGERVIEHXLMWCSYEVIHSMRKKVIEX';
var shift = -4;

function caesarCipher(input, shift) {
  if (shift < 0) return caesarCipher(input, shift + 26);

  var output = '';

  for (var i = 0; i < input.length; i++) {
    var x = input[i];

    if (x.match(/[a-z]/i)) {
      var code = input.charCodeAt(i);

      if (code >= 65 && code <= 90)
        x = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      else if (code >= 97 && code <= 122)
        x = String.fromCharCode(((code - 97 + shift) % 26) + 97);
    }

 
    output += x;
  }


  return output;
}

caesarCipher(input, shift);
