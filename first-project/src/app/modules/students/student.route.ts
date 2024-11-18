import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

// will call controller function
router.post('/create-student', StudentControllers.createStudent);

router.get('/', StudentControllers.getAllStudents);

router.get('/:studentid', StudentControllers.getSingleStudents);

router.delete('/:studentid', StudentControllers.getdeleteStudents);

export const StudentRoutes = router;

// route ---> controller ----> services --> database
