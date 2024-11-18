import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import studentValidationSchema from './student.validation';
// import studentValitaionSchema from './student.validation';

// import joi

const createStudent = async (req: Request, res: Response) => {
  try {
    const { Student: studentData } = req.body;

    // for Joi
    // creating a schema validation using joy
    //  const {error,value} = studentValitaionSchema.validate
    //  (studentData)

    //  console.log({error},{value});

    // const result = await StudentServices.createStudentIntoDB(value);

    //  if(error){
    //   res.status(500).json({
    //     success: false,
    //     message: 'something went wrong',
    //     error: error.details,
    //   });
    //  }

    // end Joi

    // createing a schema validation using zod

    const zodparseData = studentValidationSchema.parse(studentData)

    // give firstly error
    const result = await StudentServices.createStudentIntoDB(zodparseData);

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err : any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const getSingleStudents = async (req: Request, res: Response) => {
  try {
    const { studentid } = req.params;

    const result = await StudentServices.getSingleStudentsFromDB(studentid);

    res.status(200).json({
      success: true,
      message: 'Students is retrieved successfully',
      data: result,
    });
  } catch (err:any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};


const getdeleteStudents = async (req: Request, res: Response) => {
  try {
    const { studentid } = req.params;

    const result = await StudentServices.deleteStudentsFromDB(studentid);

    res.status(200).json({
      success: true,
      message: 'Students is deleted successfully',
      data: result,
    });
  } catch (err:any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};



export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudents,
  getdeleteStudents
};
