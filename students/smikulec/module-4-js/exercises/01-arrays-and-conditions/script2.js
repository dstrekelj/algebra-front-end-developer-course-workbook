function countPrimeNumbers(from,to) {
//set the counter for the prime numbers
    var counter = 0;

//iterates each number from the value of the first argument through the value of the second argument passed to the function

for (var i = from; i <= to; i++) {
        if (i == 1) continue; 

//the function that checks if a number is a prime number is called with the value of i passed to it - if it's true value of the counter variable is incremented
        else if (isPrime(i)) counter++;    
    }
// the function returns the counted prime numbers after all the iterations
    return counter;
    
}

function isPrime(n) {

//if the number can be divided without remainder than it's not a prime number and therefore the return value is false, if it cannot the value returned is true

    for (var j = 2; j < (n - 1); j++) {
            if (n % j == 0) return false;                     
    }  
    return true;
}

console.log(countPrimeNumbers(1,100));