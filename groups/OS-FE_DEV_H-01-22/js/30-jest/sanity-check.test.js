const math = require('./math');

test('Sanity check', () => {
    expect(true).toBe(true);
});

test('Adding 1 and 2 returns 3', () => {
    expect(math.add(1, 2)).toBe(3);
});

test('isEven() returns false if number is odd', () => {
    expect(math.isEven(1)).toBe(false);
    expect(math.isEven(3.14)).toBe(false);
    expect(math.isEven(0)).toBe(false);
});

test('isEven() returns true if number is even', () => {
    expect(math.isEven(2)).toBe(true);
});