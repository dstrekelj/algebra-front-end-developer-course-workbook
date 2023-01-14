/*
Doraditi logiku tako da se napravi novi niz u kojem je svaki element iz niza "numbers" pomnožen sa 10.

Ispisati novi niz u konzolu tako da su sve znamenke odvojene sa "_". Proučiti MDN metode nad nizovima.
*/
const numbers = [1, 2, 3];
numbers.push(4);

const newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    newNumbers.push(numbers[i] * 10);
}

console.log(newNumbers.join('_'));