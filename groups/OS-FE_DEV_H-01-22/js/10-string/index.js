/*
Napišite program koji će transformirati tekst u varijabli "text" na sljedeći način:

"lorem ipsum" -> "LoReM IpSuM"
"lorem ipsum" -> "Lorem ipsum"

Koristite metode za rad sa stringom, petlje, i uvjete.
*/

const text = "lorem ipsum";
let newText = "";

for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
        newText = newText + text[i].toUpperCase();
    } else {
        newText = newText + text[i].toLowerCase();
    }
}

console.log(newText);