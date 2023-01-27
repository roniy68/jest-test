const stringLength = require('../src/stringLength.js');

test('Length of a string', () => {
  expect(stringLength('abcde')).toBe(5);
});

test('Length of a string with empty string', () => {
  expect(() => stringLength('')).toThrow('abc');
});