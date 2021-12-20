import express, { Application } from 'express';
import redis from './redis';
import './compile-deck';

// Endpoints
import { createDeckEndpoint, createDeckSchema } from './endpoints/create-deck';
import { drawCardEndpoint } from './endpoints/draw-card';
import { openDeckEndpoint } from './endpoints/open-deck';
import { validateMiddleware } from './endpoints/validate';

export const app: Application = express();
const port = 3000;

// Configure http server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post(
  '/create-deck',
  validateMiddleware(createDeckSchema),
  createDeckEndpoint,
);

app.get('/open-deck/:deckId', openDeckEndpoint);
app.get('/draw-card/:deckId/:count', drawCardEndpoint);

// Start redis client and http server
(async () => {
  try {
    await redis.connect();
    console.log('Redis client connected successfully');

    // Choose random port when in test environment
    if (process.env.NODE_ENV !== 'test') {
      app.listen(port, () => console.log(`Listening on port ${port}`));
    }
  } catch (err) {
    console.error(`Error occured: ${err}`);
  }
})();
