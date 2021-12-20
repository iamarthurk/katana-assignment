import request from 'supertest';
import { app } from '../../app';

describe('POST /create-deck', () => {
  test('should retrieve proper response', async () => {
    const response = await request(app).post('/create-deck').send({
      type: 'FULL',
      shuffled: false,
    });

    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toEqual(
      expect.stringContaining('json'),
    );
    expect(response.body.type).toBe('FULL');
  });
});
