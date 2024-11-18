import { Schema, model } from 'mongoose';
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
  name: { type: UserNameSchema, required: true }, 
  gender: {
    type: String,
    enum: ['male', 'female'], 
  },
  dateOfBirth: { type: String }, 
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
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-'], 
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  profileImg: { type: String }, 
  isActive: {
    type: String,
    enum: ['active', 'inactive'], 
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
