import { Request, Response } from 'express';
import { drawCards } from '../functions/drawCards';
import { expandDeck } from '../functions/expandDeck';
import { persistDeck } from '../functions/persistDeck';
import { retrieveDeck } from '../functions/retrieveDeck';

interface RequestParams {
  deckId: string;
  count: string;
}

export async function drawCardEndpoint(
  req: Request<RequestParams, unknown, unknown, unknown>,
  res: Response,
): Promise<Response> {
  const deckRecord = await retrieveDeck(req.params.deckId);
  const count = Number(req.params.count);

  if (deckRecord === null) {
    return res.status(400).send({
      message: 'Make sure to provide correct deck id',
    });
  }

  if (count > deckRecord.cards.length) {
    return res.status(400).send({
      message: 'There are no enough cards in deck',
    });
  }

  const [drawnCards, currentDeck] = drawCards(deckRecord.cards, count);

  await persistDeck(req.params.deckId, {
    ...deckRecord,
    cards: currentDeck,
  });

  return res.json({
    cards: expandDeck(drawnCards),
  });
}
