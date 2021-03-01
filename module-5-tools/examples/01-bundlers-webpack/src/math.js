module.exports.pickRandom = function (array) {
    if (!Array.isArray(array)) {
        throw new Error('Expected array argument');
    }

    const index = Math.floor(Math.random() * array.length);

    return array[index];
}
