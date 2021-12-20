import { Request, Response } from 'express';

export async function drawCardEndpoint(
  req: Request,
  res: Response,
): Promise<Response> {
  return res.json({});
}
