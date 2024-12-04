import mongoose from 'mongoose';
import config from '../../config';
import { AcademicSemister } from '../academic Semister/academic_model';
import type { TStudent } from '../students/student-interface';
import { Student } from '../students/student.model';
import type { TUser } from './user-interface';
import { User } from './user-model';
import { generateStudentId } from './user-utils';
import AppError from '../../errors/Apperror';
import httpStatus from 'http-status';

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
  } catch (error) {
    // Rollback transaction in case of an error
    await session.abortTransaction();
    throw error;
  } finally {
    // End session
    session.endSession();
  }
};

export const UserService = {
  createStudentIntoDB,
};
