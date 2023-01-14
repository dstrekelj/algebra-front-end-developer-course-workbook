/*
Napraviti objekt "person" sa svojstvima:
ime, prezime, dob, interesi (array), funkcija koji ispiše "Hello!"

Dodajte na "person" objekt funkciju koja će u konzolu ispisati sve interese:

"My interests are: interest1, interest2, interest3"
*/
const pet = {
    numberOfLegs: 4,
    name: "Nero",
    weight: 16,
    "say hello": function (name) {
        console.log("Hello!", name);
    }
};

console.log(pet);
console.log(pet.name);

pet["say hello"]("Ivo");

const person = {
    firstName: "Domagoj",
    lastName: "Štrekelj",
    age: 30,
    interests: ["Music", "Movies", "Art", "Gobleni"],
    sayHello: function () {
        console.log("Hello from Domagoj!");
    },
    myInterests: function() {
        console.log("My interests are: ", this.interests.join(', '));
    }
}

person.sayHello();
person.myInterests();