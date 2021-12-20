// Returns tuple by splitting the deck array
// [drawnCards, currentDeck]
export function drawCards(deck: string[], count: number): [string[], string[]] {
  return [deck.slice(0, count), deck.slice(count)];
}
