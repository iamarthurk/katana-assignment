import { shuffleDeck } from '../shuffleDeck';
import { createDeck } from '../createDeck';

describe('shuffleDeck function', () => {
  const deck = createDeck();
  const originalDeck = [...deck];
  shuffleDeck(deck);

  test('shuffled deck should not be equal to the deck', () => {
    expect(deck).not.toEqual(originalDeck);
  });
});
