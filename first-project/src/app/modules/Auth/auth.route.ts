
import express from 'express';

import { USER_ROLE } from './../user/user.constant';
import { AuthControllers } from './auth.controller';
import { AuthValidation } from './auth.validation';
import auth from '../../middleware/auth';
import ValidateRequest from '../../middleware/validateRequest';

const router = express.Router();

router.post(
  '/login',
  ValidateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser,
);

router.post(
  '/change-password',
  auth(USER_ROLE.admin, USER_ROLE.faculty, USER_ROLE.student),
  ValidateRequest(AuthValidation.changePasswordValidationSchema),
  AuthControllers.changePassword,
);

router.post(
  '/refresh-token',
  ValidateRequest(AuthValidation.refreshTokenValidationSchema),
  AuthControllers.refreshToken,
);

export const AuthRoutes = router;