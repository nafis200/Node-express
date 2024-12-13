import express from 'express';
import { UserController } from './user-controller';

import { createStudentValidationSchema } from '../students/student.validation';
import ValidateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';
import { USER_ROLE } from './user.constant';

const router = express.Router();

// will call controller function
router.post(
  '/create-student',
  auth(USER_ROLE.admin),
  ValidateRequest(createStudentValidationSchema),
  UserController.createStudent,
);

export const UserRoutes = router;

// route ---> controller ----> services --> database
