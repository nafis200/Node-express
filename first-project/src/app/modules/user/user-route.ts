import express from 'express';
import { UserController } from './user-controller';

import { createStudentValidationSchema } from '../students/student.validation';
import ValidateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';
import { USER_ROLE } from './user.constant';
import express, { NextFunction, Request, Response } from 'express';
import { Uservalidation } from './user-validation';
import { createAdminValidationSchema } from '../Admin/admin.validation';
import { createFacultyValidationSchema } from '../faculty/faculty.validation';
import { upload } from '../../utils/sendImageToCloudinary';

const router = express.Router();

// will call controller function
router.post(
  '/create-student',
  auth(USER_ROLE.admin),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  ValidateRequest(createStudentValidationSchema),
  UserController.createStudent,
);

router.post(
  '/create-faculty',
  auth(USER_ROLE.admin,USER_ROLE.superAdmin),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  ValidateRequest(createFacultyValidationSchema),
  UserController.createFaculty,
);

router.post(
  '/create-admin',
  // auth(USER_ROLE.admin),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.body);
    req.body = JSON.parse(req.body.data);
    next();
  },
  ValidateRequest(createAdminValidationSchema),
  UserController.createAdmin,
);

router.post(
  '/change-status/:id',
  auth('admin'),
  ValidateRequest(Uservalidation.changeStatusValidationSchema),UserController.changeStatus
);

router.get('/me', auth('student', 'faculty', 'admin'), UserController.getMe);





export const UserRoutes = router;

// route ---> controller ----> services --> database
