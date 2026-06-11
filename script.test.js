const { subtract } = require('./script');

test('5 - 2 = 3', () => {
    expect(subtract(5, 2)).toBe(3);
});

test('0 - 5 = -5', () => {
    expect(subtract(0, 5)).toBe(-5);
});

test(' 0.3 - 0.1 примерно = 0.2', () => {
    expect(subtract(0.3, 0.1)).toBeCloseTo(0.2);
});