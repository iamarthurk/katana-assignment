import request from 'supertest';
import { app } from '../../app';

describe('GET /open-deck/:deckId', () => {
  test('should throw error when wrong deckId is specified', async () => {
    const response = await request(app).get('/open-deck/wrong-uuid');

    expect(response.statusCode).toBe(400);
  });
});
