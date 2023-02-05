function add(a, b) {
    return a + b;
}

function isEven(a) {
    if (a === 0) return false;
    return a % 2 === 0;
}

module.exports = {
    add: add,
    isEven: isEven,
};