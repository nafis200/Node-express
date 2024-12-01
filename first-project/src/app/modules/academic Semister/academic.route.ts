
import express from 'express';
import { AcademicSemisterController } from './academic.controller';
import ValidateRequest from '../../middleware/validateRequest';
import { AcademicSemesterValidation } from './academic_validation';


const router = express.Router();

router.post('/create-academic-semester',ValidateRequest(AcademicSemesterValidation.createAcademicSemesterValidationSchema),
     AcademicSemisterController.createAcademicSemester)

export const AcademicSemesterRoutes = router;