/*
Doradite ovaj kod tako da možete pomoću tri konstante definirate stranice trokuta. Pretpostavit ćemo da C predstavlja hipotenuzu, A i B katete.

Ispišite u konzolu je li trokut pravokutan ili nije.
Ispišite u konzolu je li trokut jednakokračan ili nije.
Ispišite u konzolu je li trokut raznostraničan ili nije.
*/

const a = 3;
const b = 4;
const c = 5;

console.log(`Pravokutan? ${(a**2 + b**2) === c**2}`);
console.log(`Pravokutan? ${Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)}`);
console.log(`Jednakokračan? ${(a === b) || (b === c) || (c === a)}`);
console.log(`Raznostraničan? ${(a !== b) && (b !== c) && (c !== a)}`);