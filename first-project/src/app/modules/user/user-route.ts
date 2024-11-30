
import express, {  Request, Response, NextFunction } from 'express';
import { UserController } from './user-controller';


const router = express.Router();


const shanaBahini = (req:Request, res:Response,next:NextFunction)=>{
     console.log(req.body);
     next()
     
}

// will call controller function
router.post('/create-student',shanaBahini, UserController.createStudent);


export const UserRoutes = router;

// route ---> controller ----> services --> database
