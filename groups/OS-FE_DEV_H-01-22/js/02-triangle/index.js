const a = 3;
const b = 5;
const c = 7;

console.log('Opseg ' + (a + b + c));
console.log(`a^2+b^2=c^2 -> ${a}^2+${b}^2=${c}^2`);
console.log(`a^2+b^2=c^2 -> ${a*a}+${b*b}=${c*c}`);
console.log(`a^2+b^2=c^2 -> ${Math.pow(a, 2)}+${b*b}=${c*c}`);
console.log(`a^2+b^2=c^2 -> ${a**2}+${b*b}=${c*c}`);