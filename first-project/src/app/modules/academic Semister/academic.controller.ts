

// import { UserService } from './user-services';

import httpStatus from 'http-status';
import catchAsync from '../../utils/Catchasync';
import sendResponse from '../../utils/sendresponse';
import { AcademicSemesterServices } from './academic_services';

const createAcademicSemester = catchAsync(async (req, res) => {


  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semister is created successfully',
    data: result,
  });
});

export const AcademicSemisterController  = {
   createAcademicSemester
};

