import { Request, Response } from 'express';
import * as Yup from 'yup';

export const createDeckSchema = Yup.object().shape({
  type: Yup.string().oneOf(['FULL', 'SHORT']).required(),
  shuffled: Yup.boolean().required(),
});

export async function createDeckEndpoint(
  req: Request,
  res: Response,
): Promise<Response> {
  return res.json({});
}
