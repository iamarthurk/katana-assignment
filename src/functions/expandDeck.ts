import { Card } from '../@types';
import { compiledDeck } from '../compile-deck';

// Returns expanded array of cards
// Containing detailed info for each item
export function expandDeck(deck: string[]): Card[] {
  return deck.map((d) => compiledDeck[d]);
}
