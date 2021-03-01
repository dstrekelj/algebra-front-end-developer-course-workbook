const math = require('./src/math');
const nanoid = require('nanoid');

console.log('Random element', math.pickRandom([1, 2, 3, 4, 5]));
console.log('Nano ID', nanoid.nanoid());
