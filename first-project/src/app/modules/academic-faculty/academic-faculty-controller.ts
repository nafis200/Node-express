

import httpStatus from 'http-status';
import catchAsync from '../../utils/Catchasync';
import sendResponse from '../../utils/sendresponse';
import { AcademicFacultiesServices } from './academic-faculty-services';


const createAcademicFaculty = catchAsync(async (req, res) => {


  const result = await AcademicFacultiesServices.createAcademicFacultyIntoDB(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty is created successfully',
    data: result,
  });
});


const getAllAcademicFaculties = catchAsync(async (req, res) => {
  const result = await AcademicFacultiesServices.getAllAcademicFacultiesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty are retrieved successfully',
    data: result,
  });
});

const getSingleAcademicFaculties = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result =
    await AcademicFacultiesServices.getSingleAcademicFacultiesFromDB(semesterId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty is retrieved succesfully',
    data: result,
  });
});

const updateAcademicFaculties = catchAsync(async (req, res) => {
  const { facultyId } = req.params;

  
  const result = await AcademicFacultiesServices.updateAcademicFacultiesIntoDB(
    facultyId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty is retrieved succesfully',
    data: result,
  });
});




export const AcademicFacultyController  = {
    createAcademicFaculty,
    getAllAcademicFaculties,
    getSingleAcademicFaculties,
    updateAcademicFaculties
   
};

