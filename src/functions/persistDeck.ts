import redis from '../redis';
import { RedisDeckRecord } from '../@types';

// Saves deck in redis storage
// Overwrites existing values
export function persistDeck(uuid: string, deck: RedisDeckRecord) {
  return redis.set(`deck:${uuid}`, JSON.stringify(deck));
}
