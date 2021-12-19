import { greeter } from '../demo';

describe('greeter function', () => {
  test('a greet should start with Hello', () => {
    expect(greeter('Bob').startsWith('Hello')).toBe(true);
  });
});
