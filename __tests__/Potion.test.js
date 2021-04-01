const Potion = require('../lib/Potion.js');


test('create a health potion object', () => {
    const potion = new Potion('health');

    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
});

// creates a random, poiton object incase the potio constructon is called without any arguments
test('creates a random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqaul(expect.any(string));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
})