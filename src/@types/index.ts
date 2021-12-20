export interface Card {
  suit: string;
  value: string;
  code: string;
}

export interface RedisDeckRecord {
  type: DeckType;
  shuffled: boolean;
  cards: string[];
}

export type DeckType = 'FULL' | 'SHORT';
export type CompiledDeck = { [code: string]: Card };
