import { Schema, model, connect } from 'mongoose';
import type { Student, UserName } from './student-interface';

const UserNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: UserNameSchema
  gender: ['male', 'female'],
  dateofBirth: { type: String },
  email: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-'],

  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  profileImg: { type: string },
  isActive: ['active', 'inactive'],

  //  Gurdian is delete
});

// Schema

export const StudentModel = model<Student>('Student',studentSchema);