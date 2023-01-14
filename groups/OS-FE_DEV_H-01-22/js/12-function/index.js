/*
Napišite funkciju "pita" koja prima 3 parametra "a", "b", "c", provjeri je li trokut pravokutan na osnovu pitagorinog poučka, i vrati true ako je ili false ako nije.

Ako a, b, ili c nisu broj, vratite false.
*/

function pita(a, b, c) {
    if (typeof a !== "number") {
        return false;
    }
    if (typeof b !== "number") {
        return false;
    }
    if (typeof c !== "number") {
        return false;
    }
    
    return a * a + b * b === c * c;
}


console.log(pita(3, 4, 5)); // true
console.log(pita(1, 2, 3)); // false
