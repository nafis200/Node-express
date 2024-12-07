/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import config from '../../config';
import { AcademicSemister } from '../academic Semister/academic_model';
import type { TStudent } from '../students/student-interface';
import { Student } from '../students/student.model';
import type { TUser } from './user-interface';
import { User } from './user-model';
import { generateFacultyId, generateStudentId } from './user-utils';
import AppError from '../../errors/Apperror';
import httpStatus from 'http-status';
import type { TFaculty } from '../faculty/faculty.interface';
import { AcademicDepartment } from '../academic-department/academic-department-model';
import { Faculty } from '../faculty/faculty.model';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // Check if payload is defined
  if (!payload) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Student data is undefined or null');
  }

  // Start Mongoose session for transaction
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Create user object with default values
    const userData: Partial<TUser> = {
      password: password || config.default_password,
      role: 'student',
    };

    // Find academic semester information
    const admissionSemester = await AcademicSemister.findById(payload.admissionSemester);
    if (!admissionSemester) {
      throw new AppError(httpStatus.NOT_FOUND, 'Admission semester not found');
    }

    // Generate student ID
    userData.id = await generateStudentId(admissionSemester);

    // Create user (transcation -1)
    const newUser = await User.create([userData], { session });
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    // Set references for student payload
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    // Create student (transaction - 2)
    const newStudent = await Student.create([payload], { session });
    if (!newStudent.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create student');
    }

    // Commit transaction
    await session.commitTransaction();
    return newStudent;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // Rollback transaction in case of an error
    await session.abortTransaction();
    throw new Error("failed to delete students");
  } finally {
    // End session
    session.endSession();
  }
};



const createFacultyIntoDB = async (password: string, payload: TFaculty) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'faculty';

  // find academic department info
  const academicDepartment = await AcademicDepartment.findById(
    payload.academicDepartment,
  );

  if (!academicDepartment) {
    throw new AppError(400, 'Academic department not found');
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    //set  generated id
    userData.id = await generateFacultyId();

    // create a user (transaction-1)
    const newUser = await User.create([userData], { session }); // array

    //create a faculty
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }
    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id

    // create a faculty (transaction-2)

    const newFaculty = await Faculty.create([payload], { session });

    if (!newFaculty.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create faculty');
    }

    await session.commitTransaction();
    await session.endSession();

    return newFaculty;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

// const createAdminIntoDB = async (password: string, payload: TFaculty) => {
//   // create a user object
//   const userData: Partial<TUser> = {};

//   //if password is not given , use deafult password
//   userData.password = password || (config.default_password as string);

//   //set student role
//   userData.role = 'admin';

//   const session = await mongoose.startSession();

//   try {
//     session.startTransaction();
//     //set  generated id
//     userData.id = await generateAdminId();

//     // create a user (transaction-1)
//     const newUser = await User.create([userData], { session }); 

//     //create a admin
//     if (!newUser.length) {
//       throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create admin');
//     }
//     // set id , _id as user
//     payload.id = newUser[0].id;
//     payload.user = newUser[0]._id; //reference _id

//     // create a admin (transaction-2)
//     const newAdmin = await Admin.create([payload], { session });

//     if (!newAdmin.length) {
//       throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create admin');
//     }

//     await session.commitTransaction();
//     await session.endSession();

//     return newAdmin;
//   } catch (err: any) {
//     await session.abortTransaction();
//     await session.endSession();
//     throw new Error(err);
//   }
// };




export const UserService = {
  createStudentIntoDB,
  createFacultyIntoDB,
  // createAdminIntoDB,
};
