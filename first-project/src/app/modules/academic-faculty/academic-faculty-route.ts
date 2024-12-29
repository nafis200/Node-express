
import express from 'express';
import ValidateRequest from '../../middleware/validateRequest';
import { AcademicFacultyValidation } from './academic-faculty-validation';
import { AcademicFacultyController } from './academic-faculty-controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/create-academic-faculty',
  auth(USER_ROLE.superAdmin),
  ValidateRequest(
    AcademicFacultyValidation.createAcademicFacultyValidationSchema
  ),
  AcademicFacultyController.createAcademicFaculty
);

router.get(
  '/:facultyId',
  AcademicFacultyController.getSingleAcademicFaculties,
);

router.get('/', AcademicFacultyController.getAllAcademicFaculties);

router.patch(
  '/:facultyId',
  ValidateRequest(
    AcademicFacultyValidation.updateAcademicFacultyValidationSchema
  ),
  AcademicFacultyController.updateAcademicFaculties,
);

export const AcademicFacultyRoutes = router;
