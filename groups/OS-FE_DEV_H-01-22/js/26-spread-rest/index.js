function sum(...numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

const numbers = [1, 2, 3];

console.log(numbers);
console.log(...numbers);    // console.log(1, 2, 3);

const moreNumbers = [0, ...numbers, 4];

console.log(moreNumbers);

console.log(sum(...numbers));
console.log(sum(...moreNumbers));
console.log(sum(0, 1, 2, 3, 4));
