import express from 'express';
import { StudentControllers } from './student.controller';
import ValidateRequest from '../../middleware/validateRequest';
import { updateStudentValidationSchema } from './student.validation';

const router = express.Router();

// will call controller function
// router.post('/create-student', StudentControllers.createStudent);

router.get('/', StudentControllers.getAllStudents);

router.get('/:studentid', StudentControllers.getSingleStudents);

router.delete('/:studentid', StudentControllers.getdeleteStudents);

router.patch('/:studentid',ValidateRequest(updateStudentValidationSchema),StudentControllers.UpdateStudents)

export const StudentRoutes = router;

// route ---> controller ----> services --> database
