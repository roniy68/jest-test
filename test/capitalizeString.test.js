const capitalizeString = require('../src/capitalizeString');

test('Capitalize a string', () => {
    expect(capitalizeString('abcde')).toBe('Abcde');
})