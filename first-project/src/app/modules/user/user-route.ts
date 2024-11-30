import express from 'express';
import { UserController } from './user-controller';

import { studentValidationSchema } from '../students/student.validation';
import ValidateRequest from '../../middleware/validateRequest';


const router = express.Router();



// will call controller function
router.post(
  '/create-student',
  ValidateRequest(studentValidationSchema),
  UserController.createStudent,
);

export const UserRoutes = router;

// route ---> controller ----> services --> database
