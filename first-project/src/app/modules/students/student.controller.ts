import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import studentValitaionSchema from './student.validation';

// import joi



const createStudent = async (req: Request, res: Response) => {
  try {
   
    // creating a schema validation using joy
    

    const { Student: studentData } = req.body;

     const {error} = studentValitaionSchema.validate(studentData)

    //  console.log({error},{value});

     if(error){
      res.status(500).json({
        success: false,
        message: 'something went wrong',
        error: error.details,
      });  
     }
     

    const result = await StudentServices.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
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
  } catch (error) {
    console.log(error);
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
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudents,
};
