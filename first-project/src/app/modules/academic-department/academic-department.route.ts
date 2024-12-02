
import express from 'express';
import ValidateRequest from '../../middleware/validateRequest';
import { AcademicDepartmentValidation } from './academic-department-validation';
import { AcademicDepartmentController } from './academic-department-controller';

const router = express.Router();

router.post(
  '/create-academic-department',
  ValidateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentValidationSchema
  ),
  AcademicDepartmentController.createAcademicDepartment
);

router.get(
  '/:facultyId',
  AcademicDepartmentController.getSingleAcademicDepartment,
);

router.get('/', AcademicDepartmentController.getAllAcademicDeprment);

router.patch(
  '/:facultyId',
  ValidateRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema
  ),
  AcademicDepartmentController.updateAcademicDepartment,
);

export const AcademicDepartmentRoutes = router;
