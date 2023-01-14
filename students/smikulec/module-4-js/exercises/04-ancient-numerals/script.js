function parseAncientText(input) {

// array of arrays with each array representing a digit in ancient numeral system

    var ancient_numerals = [

        ['....', '....', '....', '....'],
    
        ['****', '....', '....', '....'],
    
        ['****', '....', '....', '****'],
    
        ['....', '****', '....', '....'],
    
        ['....', '****', '****', '....'],
    
        ['*...', '*...', '*...', '*...'],
    
        ['*..*', '*..*', '*..*', '*..*'],
    
        ['.*..', '.*..', '.*..', '.*..'],
    
        ['.**.', '.**.', '.**.', '.**.'],
    
        ['****', '****', '****', '****'],
    
        ];

// variable declaration that will be returned from a function as a final result        
        
    var parsed_numbers = "";

// iterate each ancient number in the array     
    
    for (var i = 0; i < input.length; i++) {

// variable declaration that stores each number in the array 

      var ancientNumber = input[i];

// variable declaration that stores the length of each row of the numeral 

        var numeralRowLength = ancientNumber[0].length;
  
// declaration and initilization of an array that stores parsed arrays that represent a digit

        var find_digits = [];

// declaration and initilization of a string that stores the values of each parsed number

        var found_number = "";

// iterate each element of each array and put elements at the exact index to an array that represents the found digit 
            
        for (var j = 0; j < numeralRowLength; j++) {

// declaration and initilization of an array that stores elements of each digit

          var each_digit = [];
              
            each_digit.push(ancientNumber[0][j], ancientNumber[1][j], ancientNumber[2][j], ancientNumber[3][j]);
              
            find_digits.push(each_digit);
        }

// iterate each element of an array of arrays that represents a digit        

        for (var j = 0; j < find_digits.length; j++) {

            var found_digit;

// iterate each element of an array of arrays that represents ancient numerals 

            for (var k = 0; k < ancient_numerals.length; k++) {

// convert the array that represents a digit into a string to be able to compare them easily

              if (find_digits[j].toString() == ancient_numerals[k].toString()) {
                    
// if a match is found the index of the ancient numerals array represents the digit that is searched for

                found_digit = k;
                }
            }

            found_number = found_number + found_digit;
        }

        parsed_numbers = parsed_numbers + found_number + " ";
    }
    
    return parsed_numbers;
    
}

var text = [
    [
      [ '****', '....', '....', '****' ],
      [ '....', '****', '....', '****' ],
      [ '....', '****', '....', '****' ],
      [ '****', '....', '....', '****' ],
    ],
    [
      [ '*..*', '.*..' ],
      [ '*..*', '.*..' ],
      [ '*..*', '.*..' ],
      [ '*..*', '.*..' ],
    ],
    [
      [ '....', '*...', '.**.' ],
      [ '****', '*...', '.**.' ],
      [ '....', '*...', '.**.' ],
      [ '....', '*...', '.**.' ],
    ],
    [
      [ '****' ],
      [ '....' ],
      [ '....' ],
      [ '....' ],
    ],
  ]

console.log(parseAncientText(text));
