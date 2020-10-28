let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


function caesarShift(input, shift) {
    let output= '';
    input = 'HOWAMIDOINGSOFAR';
    shift = 4;
    for(var i = 0; i < input.length; i++){
        var letterPosition = alphabet.indexOf(input[i]);
        if (letterPosition + shift < 26) {
            var newLetter = alphabet[letterPosition + shift];
        } else {
        var newLetter = alphabet[25];
    }

        output = output + newLetter;
    }
    return output;
}