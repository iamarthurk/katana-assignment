import { expandDeck } from '../expandDeck';
import { createDeck } from '../createDeck';

describe('expandDeck function', () => {
  test('items in deck should be instance of card', () => {
    const deck = createDeck();

    expect(expandDeck(deck)[0]).toHaveProperty('code');
  });
});
