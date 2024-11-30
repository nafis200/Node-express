import { UserService } from './user-services';
import sendResponse from '../../utils/sendresponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/Catchasync';

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  const result = await UserService.createStudentIntoDB(password, studentData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});

export const UserController = {
  createStudent,
};
