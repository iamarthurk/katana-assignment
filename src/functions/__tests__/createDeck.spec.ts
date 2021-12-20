import { createDeck } from '../createDeck';

describe('createDeck function', () => {
  test('full deck should contain 52 cards', () => {
    expect(createDeck().length).toBe(52);
  });

  test('short deck should contain 36 cards', () => {
    expect(createDeck(false).length).toBe(36);
  });
});
