import { Request, Response, NextFunction } from 'express';
import { UserService } from './user-services';
import sendResponse from '../../utils/sendresponse';
import httpStatus from 'http-status';
const createStudent = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const { password, student: studentData } = req.body;

    const result = await UserService.createStudentIntoDB(password, studentData);

    // res.status(200).json({
    //   success: true,
    //   message: 'Student is created successfully',
    //   data: result,
    // });
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
