import express, { Request, Response, NextFunction } from 'express';
import { UserController } from './user-controller';
import type { AnyZodObject } from 'zod';
import { studentValidationSchema } from '../students/student.validation';


const router = express.Router();

const ValidateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // validation

    try {
      await schema.parseAsync({
        body: req.body,
      });
      next();
    } catch (error) {
      next(error);
    }
  };
};

// will call controller function
router.post(
  '/create-student',
  ValidateRequest(studentValidationSchema),
  UserController.createStudent,
);

export const UserRoutes = router;

// route ---> controller ----> services --> database
