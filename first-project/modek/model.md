import { Schema, model, connect } from 'mongoose';
import type { Student, UserName } from './student.interface';
import { LocalGuardian } from './student.interface';

const UserNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [20, 'First name less than 20'],
  },
  middleName: {
    type: String,
    maxlength: [20, 'Middle name must be less than 20'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    maxlength: [20, 'Last name must be less than 20'],
  },
});

const LocalGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: [true, 'Student ID is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Passward Id is required'],
    maxlength: [20, 'password should under 20 character'],
  },

  name: {
    type: UserNameSchema,
    required: [true, 'name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: 'gender must be either male or female',
    },
    required: [true, 'gender must be female or male'],
  },

  dateOfBirth: {
    type: String,
    required: [true, 'Date of birth is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  contactNo: {
    type: String,
    required: [true, 'Contact number is required'],
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency contact number is required'],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-'],
      message: "Blood group must be one of 'A+', 'A-', 'B+', 'B-', 'O+', 'O-'",
    },
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
  },
  localGuardian: {
    type:LocalGuardianSchema,
    required:[true, "Local Gurdian details are required"]
  },
  profileImg: {
    type: String,
    default: 'default-profile.png',
  },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'inactive'],
      message: "Status must be either 'active' or 'inactive'",
    },
    default: 'active', // Default value
  },
  isDeleted: {
    type: Boolean,
    default:false
  }
});

export const StudentModel = model<Student>('Student', studentSchema);
