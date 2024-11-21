

import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {

    const { student: studentData } = req.body;

    const zodParseData = studentValidationSchema.parse(studentData)



    const result = await StudentServices.createStudentIntoDB(zodParseData);
    res.status(200).json({
      success: true,
      message: 'Student is create successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentIntoDB();
    res.status(200).json({
      success: true,
      message: 'Student is retrived Data successfully',
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'Something went wrong',
      data: error,
    });
  }
};

const getSingleStudents = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentIntoDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is retrived Data successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteStudents = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentIntoDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is retrived Data successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudents,
  deleteStudents,
};
