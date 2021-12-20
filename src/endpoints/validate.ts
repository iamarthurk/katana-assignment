import { NextFunction, Request, Response } from 'express';
import { BaseSchema } from 'yup';

export function validateMiddleware<T extends BaseSchema>(resouceSchema: T) {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const resource = req.body;

    try {
      await resouceSchema.validate(resource);
      next();
    } catch (e) {
      res.status(400).json({ error: e.errors.join('\n') });
    }
  };
}
