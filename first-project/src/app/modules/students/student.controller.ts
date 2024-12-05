import { RequestHandler } from 'express';
import { StudentServices } from './student.service';
import catchAsync from '../../utils/Catchasync';

// higher order function

const getAllStudents: RequestHandler = async (req, res, next) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB(req.query);

    res.status(200).json({
      success: true,
      message: 'Students are retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleStudents = catchAsync(async (req, res) => {
  const { studentid } = req.params;

  const result = await StudentServices.getSingleStudentsFromDB(studentid);

  res.status(200).json({
    success: true,
    message: 'Students is retrieved successfully',
    data: result,
  });
});

const UpdateStudents = catchAsync(async (req, res) => {
  
  const { studentid } = req.params;
  const {student} = req.body
  const result = await StudentServices.UpdateStudentIntoDB(studentid,student);
  res.status(200).json({
    success: true,
    message: 'Students is Updated successfully',
    data: result,
  });
});

const getdeleteStudents = catchAsync(async (req, res) => {
  
  const { studentid } = req.params;
  const result = await StudentServices.deleteStudentsFromDB(studentid);
  res.status(200).json({
    success: true,
    message: 'Students is deleted successfully',
    data: result,
  });
});

export const StudentControllers = {
  // createStudent,
  getAllStudents,
  getSingleStudents,
  getdeleteStudents,
  UpdateStudents
};
