import { compiledDeck } from '../compile-deck';

// Returns list of card codes from compiled deck
export function createDeck(full = true): string[] {
  const deck = Object.keys(compiledDeck);

  // Cut first 20 items if full = false
  return full === false ? deck.slice(16) : deck;
}
