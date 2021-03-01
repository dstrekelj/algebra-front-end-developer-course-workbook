class Dog {
    constructor() {
        this.barkSound = "Woof";
    }

    bark() {
        console.log(this.barkSound.repeat(Math.floor(Math.random() * 4)));
    }
}

const dog = new Dog();

console.log(dog.bark());
