import express, { Application, Request, Response } from 'express';
import rClient from './r-client';

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({ message: 'Hello World!' });
});

(async () => {
  try {
    await rClient.connect();
    console.log('Redis client connected successfully');

    app.listen(port, (): void => {
      console.log(`Connected successfully on port ${port}`);
    });
  } catch (err: any) {
    console.error(`Error occured: ${err.message}`);
  }
})();
