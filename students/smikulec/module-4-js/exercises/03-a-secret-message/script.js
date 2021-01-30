function caesarCipher(input, shift) {

// declaration and initilization of counters that will be used to check if the input contains only uppercase letters or numbers

    var k = 0, l = 0;

// declaration and initilization of the variable that will be returned from the function 
    
    var ciphered_text = '';

// check if input is uppercase letter or a number - iterate each character of the string

    for (var i = 0; i < input.length; i++) {
        if (input[i] != input[i].toUpperCase()) {
            k++;
        }
        if (!isNaN(input[i])) {
            l++;
        }
    }    
    if ((k == 0) && (l == 0)){
        console.log("input: ", input);
    }
    else  console.log("input doesn't contain ONLY uppercase letters or it has numbers.");
    
// check if shift is a number

    if (typeof shift == "number") {
        console.log("shift: ", shift);
    }
    else console.log("shift value is not a number");

// only if all conditions are fullfilled continue with the function

    if ((k == 0) && (l == 0) && (typeof shift == "number")) {

        for (var j = 0; j < input.length; j++) {
            
// declaration of a variable that stores the UTF-16 code unit value at the given index 
            
            var char_num = input.charCodeAt(j);

            var new_char;            

// ASCII codes for uppercase letters are in range from 65 to 90, therefore we make sure the value of the declared variable stays within it with the following operations               

            var char_key = char_num + (shift % 26);

            if (char_key > 90) {
                 char_key = char_key - 26;
            }
            else if (char_key < 65) {
                char_key = char_key + 26;
            }

            new_char = String.fromCharCode(char_key);

            ciphered_text = ciphered_text + new_char;

        }
    }

    return ciphered_text;
}

console.log(caesarCipher("HOWAMIDOINGSOFAR", 4));

console.log(caesarCipher("MJCSYGERVIEHXLMWCSYEVIHSMRKKVIEX", -4));
