const dostava = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("Paket je tu!");
        } else {
            reject("Paket nije tu!");
        }
    }, 10000);
});

dostava.then((value) => console.log(value))
    .catch((error) => console.log("Greška", error));

let count = 0;
const id = setInterval(() => {
    count++;
    console.log("Nešto radim", count);

    if (count === 5) {
        dostava.then(() => console.log("Prošlo je 5 sekundi"));
    }

    if (count > 15) {
        clearInterval(id);
    }
}, 1000);