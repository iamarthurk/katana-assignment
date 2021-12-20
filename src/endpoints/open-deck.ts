import { Request, Response } from 'express';

export async function openDeckEndpoint(
  req: Request,
  res: Response,
): Promise<Response> {
  return res.json({});
}
