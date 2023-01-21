/*
1. Napraviti index.html datoteku
1a. U index.html datoteku dodati div element s ID "app"
2. Napraviti style.css datoteku
2a. Povezati index.html i style.css
2b. U style.css datoteku dodati selektor ".box" koji će napraviti kvadrat dimenzija 100x100px, crvene boje pozadine.
3. Napraviti index.js datoteku
3a. U index.html datoteku dodati skriptu index.js
3b. Selektirati #app element i spremiti ga u konstantu "appElement"
3c. Ispisati appElement u konzolu
3d. Definirati funkciju "createBox" koja ne prima niti jedan parametar. Funkcija treba kreirati div element s klasom "box" i vratiti ju nakon poziva funkcije (return).
4. Doradite funkciju createBox() tako da sa svakim pozivom funkcije položaj boxa na ekranu bude nasumično odabran (random).
5. Pomoću petlje kreirajte i dodajte 10 boxeva na stranicu.
*/
const appElement = document.querySelector("#app");
console.log(appElement);

let score = 0;

function createBox() {
    const boxElement = document.createElement("div");
    boxElement.classList.add("box");
    boxElement.style.top = `${Math.random() * (window.innerHeight - 100)}px`;
    boxElement.style.left = `${Math.random() * (window.innerWidth - 100)}px`;

    boxElement.addEventListener('click', function (event) {
        console.log('click', event);
        event.target.remove();
        score++;
    });

    return boxElement;
}

let numberOfBoxes = 0;

const intervalId = setInterval(function () {
    let boxElement = createBox();
    appElement.appendChild(boxElement);

    numberOfBoxes++;

    if (numberOfBoxes > 9) {
        clearInterval(intervalId);
        console.log(score);
    }
}, 500);
