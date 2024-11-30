import type { NextFunction, RequestHandler, Request, Response } from 'express';
import { StudentServices } from './student.service';

// higher order function

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => next(error));
  };
};

const getAllStudents: RequestHandler = async (req, res, next) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getSingleStudents = catchAsync(async (req, res, next) => {
  const { studentid } = req.params;

  const result = await StudentServices.getSingleStudentsFromDB(studentid);

  res.status(200).json({
    success: true,
    message: 'Students is retrieved successfully',
    data: result,
  });
});

const getdeleteStudents: RequestHandler = async (req, res, next) => {
  try {
    const { studentid } = req.params;

    const result = await StudentServices.deleteStudentsFromDB(studentid);
    res.status(200).json({
      success: true,
      message: 'Students is deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const StudentControllers = {
  // createStudent,
  getAllStudents,
  getSingleStudents,
  getdeleteStudents,
};
