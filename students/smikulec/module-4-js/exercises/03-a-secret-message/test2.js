function caesarCipher(input, shift) {

// check if input contains only uppercase letters 

    var is_upper; 

    var regex = /[A-Z]/g;
    
    var found_uppercase = input.match(regex);

    if ((found_uppercase == null) || (found_uppercase.length !== input.length)) {
            console.log("write an input with only uppercase letters");
            is_upper = false;
    }
    else { 
        (console.log("input: ", input));
        is_upper = true;
    }

// check if the shift value is a number 

    if (typeof shift == "number") {
        console.log("shift: ", shift);
    }
    else console.log("shift value is not a number");

    var ciphered_text = '';

// only if both conditions are fulfilled continue with the rest of the function    

    if ((is_upper == true) && (typeof shift == "number")) {

// declaration of a string that contains all the letters from an alphabet, it will be used for comparison with characters from input

        var upper_string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// iterate each element of the string input 

        for (var i = 0; i < input.length; i++) {

// iterate each element of the alphabet string
            
            for (var j = 0; j < 26; j++) {
                
// check if a character in input corresponds to the character in the alphabet 

                if (input[i] == upper_string[j]) {

// declaration of a variable that will serve as a index of a 'shifted' character in the alphabet string
                    
                    var c_key;

                    if ((j + shift) < 0) {
                        c_key = Math.abs((j + shift) + 26) % 26;
                    
                    }
                    else if ((j + shift) > 25) {
                        c_key = Math.abs((j + shift) - 26) % 26;
                    }
                    else c_key = Math.abs((j + shift)) % 26;

                    ciphered_text = ciphered_text + upper_string[c_key];
                    
                }
            }                   
        }
    }
    return ciphered_text;
}

console.log(caesarCipher("HOWAMIDOINGSOFAR", 4));

console.log(caesarCipher("MJCSYGERVIEHXLMWCSYEVIHSMRKKVIEX", -4));


