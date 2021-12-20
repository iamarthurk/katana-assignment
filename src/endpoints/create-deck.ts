import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';
import { DeckType, RedisDeckRecord } from '../@types';
import { createDeck } from '../functions/createDeck';
import { persistDeck } from '../functions/persistDeck';
import { shuffleDeck } from '../functions/shuffleDeck';

interface RequestBody {
  type: DeckType;
  shuffled: boolean;
}

export const createDeckSchema = Yup.object().shape({
  type: Yup.string().oneOf(['FULL', 'SHORT']).required(),
  shuffled: Yup.boolean().required(),
});

export async function createDeckEndpoint(
  req: Request<unknown, unknown, RequestBody, unknown>,
  res: Response,
): Promise<Response> {
  const uuid = uuidv4();
  const deck = createDeck(req.body.type === 'FULL');

  if (req.body.shuffled) {
    shuffleDeck(deck);
  }

  const deckRecord: RedisDeckRecord = {
    cards: deck,
    shuffled: req.body.shuffled,
    type: req.body.type,
  };

  await persistDeck(uuid, deckRecord);

  return res.json({
    ...req.body,
    deckId: uuid,
    remaining: deck.length,
  });
}
