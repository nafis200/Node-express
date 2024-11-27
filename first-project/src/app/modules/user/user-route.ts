
import express from 'express';
import { UserController } from './user-controller';


const router = express.Router();

// will call controller function
router.post('/create-student',UserController.createStudent);


export const UserRoutes = router;

// route ---> controller ----> services --> database
