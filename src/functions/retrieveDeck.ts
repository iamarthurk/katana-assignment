import redis from '../redis';
import { RedisDeckRecord } from '../@types';

// Retrieves deck from redis
export async function retrieveDeck(
  uuid: string,
): Promise<RedisDeckRecord | null> {
  const rawDeck = await redis.get(`deck:${uuid}`);

  return rawDeck === null ? rawDeck : JSON.parse(rawDeck);
}
