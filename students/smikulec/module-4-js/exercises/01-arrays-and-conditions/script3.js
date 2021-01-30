function countPrimeNumbers(from,to) {
// set the counter for prime numbers
    var counter = 0;
// iterate from the first argument until its value becomes the value of the second argument passed to the function when the loop will exit 
    while (from <= to) {

// set the counter if the numbers can be divided without remainder
        var k = 0;

        for (var j = 2; j < (from - 1); j++) {
            if (from % j === 0) {
                k++;             
            }
        }
// if k is 0 and the argument is a number greater than 1 (1 in not a prime number) increment the counter
        if ((from > 1) && (k === 0)) {
            counter++;
        }
// with each iteration increment the value of the first argument
    from++;
    }
// the function returns the counted prime numbers after all the iterations through the while loop
    return counter;    
}

console.log(countPrimeNumbers(1,100));