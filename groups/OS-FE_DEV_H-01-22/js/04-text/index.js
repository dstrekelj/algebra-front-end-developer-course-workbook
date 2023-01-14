const myName = "Domagoj Štrekelj";

console.log(myName.length);

console.log(myName.charAt(5));
console.log(myName[5]);

/*
1. Odvojite myName u riječi tako da podijelite tekst po razmacima.
2. Spremite ime iz točke 1 u jednu konstantu (ako ih imate više, odaberite draže)
3. Spremite prezime iz točke 1 u drugu konstantu (ako ih imate više, odaberite draže)
4. Pretvorite sva slova u imenu u velika slova i spremite u novu konstantu
5. Pretvorite sva slova u prezimenu u mala slova i spremite u novu konstantu
*/ 

const myNameAsWords = myName.split(" "); // ["Domagoj", "Štrekelj"]
const myFirstName = myNameAsWords[0];
const myLastName = myNameAsWords[1];
const myLargeFirstName = myFirstName.toLocaleUpperCase();
const mySmallLastName = myLastName.toLocaleLowerCase();

console.log(myFirstName, myLastName, myLargeFirstName, mySmallLastName);
