import { shuffleDeck } from '../shuffleDeck';
import { createDeck } from '../createDeck';

describe('shuffleDeck function', () => {
  const deck = createDeck();

  test('shuffled deck should contain the same amount of cards', () => {
    expect(shuffleDeck(deck).length).toBe(52);
  });

  test('shuffled deck should not be equal to the deck', () => {
    expect(shuffleDeck(deck)).toEqual(deck);
  });
});
