import { drawCards } from '../drawCards';
import { createDeck } from '../createDeck';

describe('drawCards function', () => {
  const deck = createDeck();

  test('deck should contain 48 cards after drawing 4', () => {
    const [, currentDeck] = drawCards(deck, 4);

    expect(currentDeck.length).toBe(48);
  });

  test('first items of deck and drawn cards should match', () => {
    const [drawnCards] = drawCards(deck, 4);

    expect(drawnCards[0]).toBe(deck[0]);
  });
});
