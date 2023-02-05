/**
 * Zadan je tekst: "a1b2c3"
 * Potrebno je sumirati sve znamenke u tekstu.
 * Ispisati sumu u konzolu (terminal).
 *
 * Primjer:
 * "a1b2c3", suma je 6
 * "a11b22", suma je 6
 */
const text = "abcdef1badass22casdsa333asdasd";
let sum = 0;

for (let i = 0; i < text.length; i++) {
  const number = parseInt(text[i]);

  if (isNaN(number)) {
    continue;
  }

  sum += number;
}

console.log(sum);

/**
 * Zadan je tekst: "a1b22c333"
 * Potrebno je prepoznati sve brojeve u tekstu.
 * Ispisati brojeve u konzolu (terminal).
 *
 * Primjer:
 * "a1b2c3", ispisujemo 1, 2, 3
 * "a1b22c333", ispisujemo 1, 22, 333
 */
const numbers = [];
let temporaryNumber = "";

for (let i = 0; i <= text.length; i++) {
  const char = text[i];
  const number = parseInt(char);

  if (isNaN(number) || i === text.length) {
    if (temporaryNumber !== "") {
      numbers.push(temporaryNumber);
      temporaryNumber = "";
    }
    continue;
  }

  temporaryNumber += char;
}

console.log(numbers);
