// Create and cache deck hashmap
// Based on typescript enums
// Useful for storage optimization
import { CompiledDeck } from './@types';

const suites = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

const values = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Ace',
  'Jack',
  'Queen',
  'King',
];

const compiledDeck: CompiledDeck = {};

for (const value of values) {
  for (const suit of suites) {
    const code = `${value[0]}${suit[0]}`;

    Object.defineProperty(compiledDeck, code, {
      writable: false,
      enumerable: true,
      value: {
        code,
        suit,
        value,
      },
    });
  }
}

export { compiledDeck };
