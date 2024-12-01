import config from '../../config';
import { AcademicSemister } from '../academic Semister/academic_model';
import type { TAcademisSemister } from '../academic Semister/academic_semister_interface';
import type { TStudent } from '../students/student-interface';
import { Student } from '../students/student.model';
import type { TUser } from './user-interface';
import { User } from './user-model';
import { generateStudentId } from './user-utils';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  try {
    // Check if studentData is defined
    if (!payload) {
      throw new Error('studentData is undefined or null');
    }

    // Create user object
    const userData: Partial<TUser> = {};

    // If password is not given, use default password
    userData.password = password || (config.default_password as string);

    // Set student role
    userData.role = 'student';


   


    // find academic semester info

    const admissionSemester = await AcademicSemister.findById(payload.admissionSemester)



    // Manually set generated ID
    userData.id = generateStudentId(admissionSemester);

    // Create the user
    const newUser = await User.create(userData);

    // Check if user is created successfully
    if (newUser) {
      // Set `id` and `_id` references in studentData
      payload.id = newUser.id; // Ensure `studentData` is mutable
      payload.user = newUser._id;

      // Create the student in the database
      const newStudent = await Student.create(payload);

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
