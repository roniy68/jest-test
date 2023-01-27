const Calculator = require('../src/calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('Addition', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('Addition with negative numbers', () => {
    expect(calculator.add(-1, -2)).toBe(-3);
  });

  test('Addition with floating point numbers', () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('Subtraction', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  });

  test('Subtraction with negative numbers', () => {
    expect(calculator.subtract(-1, -2)).toBe(1);
  });

  test('Subtraction with floating point numbers', () => {
    expect(calculator.subtract(0.1, 0.2)).toBeCloseTo(-0.1);
  });

  test('Multiplication', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });

  test('Multiplication with negative numbers', () => {
    expect(calculator.multiply(-1, -2)).toBe(2);
  });

  test('Multiplication with floating point numbers', () => {
    expect(calculator.multiply(0.1, 0.2)).toBeCloseTo(0.02);
  });

  test('Division', () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
  });

  test('Division with negative numbers', () => {
    expect(calculator.divide(-1, -2)).toBe(0.5);
  });

  test('Division with floating point numbers', () => {
    expect(calculator.divide(0.1, 0.2)).toBeCloseTo(0.5);
  });
});
