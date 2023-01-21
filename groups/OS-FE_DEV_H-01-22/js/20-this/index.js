/* function printThis() {
    this.hello = "world";
    console.log(this);
}

printThis();

console.log('---');

const person = {
    name: "Domagoj",
    address: {
        zipCode: 31000,
        city: 'Osijek',
        printThis: printThis,
    },
    printThis: printThis,
}

person.printThis();
person.address.printThis();
 */

/* function createRandomMultiplier() {
    const randomNumber = Math.random();

    return function (x) {
        return randomNumber * x;
    }
}

const randomMultiplier = createRandomMultiplier();
console.log(randomMultiplier(1));
console.log(randomMultiplier(1));
console.log(randomMultiplier(1)); */