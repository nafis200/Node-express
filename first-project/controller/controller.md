


import { Request, Response } from "express"
import { StudentServices } from "./student.service"

const createStudent = async(req: Request,res: Response)=>{

    const student = req.body 

    <!--Sent services.ts -->

    const result = await StudentServices.createStudentIntoDB(student)

    <!-- Return from services.ts -->
    res.status(200).json({
        success: true,
        message:"Student is create successfully",
        data:result
    })

}

<!-- 2nd part -->

import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {



 try{
    const {student: studentData} = req.body;
    const result = await StudentServices.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'Student is create successfully',
      data: result,
    });
 } catch(error){
    console.log(error);
    
 }

};

export const StudentControllers = {
    createStudent
}

