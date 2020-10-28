

function countPrimeNumbers(from, to) {
    let primeCounter = 0;
    for(from; from <= to; from++) {
        if(from % 2 !== 0 && from % 3 !== 0 && from % 5 !== 0) {
            ++primeCounter; 
        }
        else {
        }
    }
    return primeCounter;
} 