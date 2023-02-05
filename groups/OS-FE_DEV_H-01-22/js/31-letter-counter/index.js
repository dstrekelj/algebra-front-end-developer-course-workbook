/**
 * Napišite program koji će prebrojati koliko puta se određeno
 * slovo pojavljuje u tekstu.
 * 
 * Primjer:
 * "Lorem ipsum dolor sit amet"
 * Ako je zadano da se prebrojava "o"
 * Rezultat je 3.
 */

const sentence = "Lorem ipsum dolor sit amet";
const letterCounts = {};

for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];

    if (letterCounts[letter] > 0) {
        letterCounts[letter] = letterCounts[letter] + 1;
    } else {
        letterCounts[letter] = 1;
    }
}

console.log(letterCounts);
