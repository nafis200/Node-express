import { RequestHandler } from 'express';
import { UserService } from './user-services';
import sendResponse from '../../utils/sendresponse';
import httpStatus from 'http-status';

// type arr


const createStudent:RequestHandler = async (req,res,next) => {
  try {
    const { password, student: studentData } = req.body;

    const result = await UserService.createStudentIntoDB(password, studentData);

    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:'Student is created successfully',
      data:result

    })
  } catch (err) {
     next(err)
  }
};

export const UserController = {
  createStudent,
};
