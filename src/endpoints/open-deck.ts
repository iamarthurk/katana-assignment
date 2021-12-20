import { Request, Response } from 'express';
import { expandDeck } from '../functions/expandDeck';
import { retrieveDeck } from '../functions/retrieveDeck';

interface RequestParams {
  deckId: string;
}

export async function openDeckEndpoint(
  req: Request<RequestParams, unknown, unknown, unknown>,
  res: Response,
): Promise<Response> {
  const deckRecord = await retrieveDeck(req.params.deckId);

  if (deckRecord === null) {
    return res.status(400).send({
      message: 'Make sure to provide correct deck id',
    });
  }

  return res.json({
    deckId: req.params.deckId,
    type: deckRecord.type,
    shuffled: deckRecord.shuffled,
    remaining: deckRecord.cards.length,
    cards: expandDeck(deckRecord.cards),
  });
}
