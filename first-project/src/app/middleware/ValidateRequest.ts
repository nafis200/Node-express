import type { AnyZodObject } from 'zod';
import { Request, Response, NextFunction } from 'express';
import catchAsync from '../utils/Catchasync';

const ValidateRequest = (schema: AnyZodObject) => {
    return  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
     
      await schema.parseAsync({
        body: req.body,
        cookies: req.cookies,
      });
      next();
  });
  };

  export default ValidateRequest