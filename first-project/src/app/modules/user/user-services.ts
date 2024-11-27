import config from '../../config';
import type { TStudent } from '../students/student-interface';
import { Student } from '../students/student.model';
import type { TUser } from './user-interface';
import { User } from './user-model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  try {
    // Check if studentData is defined
    if (!studentData) {
      throw new Error('studentData is undefined or null');
    }

    // Create user object
    const userData: Partial<TUser> = {};

    // If password is not given, use default password
    userData.password = password || (config.default_password as string);

    // Set student role
    userData.role = 'student';

    // Manually set generated ID
    userData.id = '20301000029';

    // Create the user
    const newUser = await User.create(userData);

    // Check if user is created successfully
    if (newUser) {
      // Set `id` and `_id` references in studentData
      studentData.id = newUser.id; // Ensure `studentData` is mutable
      studentData.user = newUser._id;

      // Create the student in the database
      const newStudent = await Student.create(studentData);

      return newStudent;
    } else {
      throw new Error('User creation failed');
    }
  } catch (error) {
    console.error('Error creating student:', error);
    throw error;
  }
};

export const UserService = {
  createStudentIntoDB,
};
