function countPrimeNumbers(from,to) {
// set the prime numbers counter
    var counter = 0;

// declaration and initilization of array that will be populated with prime numbers 
    var prime_array = [];
 
// iterate every number from the first argument to the second argument 
    for (var i = from; i <= to; i++) {

// declaration and initilization of a variable that will be used to check if the number can be divided multiple times
        var k = true;

// iterate to see if the number can be divided without a remainder - if so k value turns to false
        for (var j = 2; j < (i - 1); j++) {
            if (i % j == 0) {
                k = false;             
            }
        }

// if k remains true the number is a prime number - the counter increments with each iteration and the array is populated with value of the prime number
        if ((i > 1) && (k == true)) {
            counter++;
            prime_array.push(i);
        }
    }

// after all the iterations the function returns the counted prime numbers and populated array
    return {counter, prime_array};

}

console.log(countPrimeNumbers(5,10));