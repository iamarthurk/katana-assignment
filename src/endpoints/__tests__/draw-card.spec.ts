import request from 'supertest';
import { app } from '../../app';

describe('GET /draw-card/:deckId/:count', () => {
  test('should throw error when wrong deckId is specified', async () => {
    const response = await request(app).get('/draw-card/wrong-uuid/4');

    expect(response.statusCode).toBe(400);
  });
});
