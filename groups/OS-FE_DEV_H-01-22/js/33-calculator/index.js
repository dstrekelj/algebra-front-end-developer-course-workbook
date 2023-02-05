const number1Element = document.querySelector('#number1');
const number2Element = document.querySelector('#number2');
const addElement = document.querySelector('#add');
const subElement = document.querySelector('#sub');
const mulElement = document.querySelector('#mul');
const resultElement = document.querySelector('#result');
const clearElement = document.querySelector('#clear');

function getNumberValues() {
    const number1 = parseFloat(number1Element.value);
    const number2 = parseFloat(number2Element.value);
    return [number1, number2];
}

function add(number1, number2) {
    return number1 + number2;
}

function sub(number1, number2) {
    return number1 - number2;
}

function mul(number1, number2) {
    return number1 * number2;
}

function checkNumbers(number1, number2) {
    return isNaN(number1) || isNaN(number2);
}

function onClick(event) {
    const numbers = getNumberValues();

    if (checkNumbers(...numbers)) {
        alert("Molimo unesite dva broja");
        return;
    }

    if (event.target.id === 'add') {
        resultElement.value = add(...numbers);
    } else if (event.target.id === 'sub') {
        resultElement.value = sub(...numbers);
    } else if (event.target.id === 'mul') {
        resultElement.value = mul(...numbers);
    }
}

addElement.addEventListener('click', onClick);
subElement.addEventListener('click', onClick);
mulElement.addEventListener('click', onClick);

clearElement.addEventListener('click', function (event) {
    number1Element.value = '';
    number2Element.value = '';
    resultElement.value = '';
});