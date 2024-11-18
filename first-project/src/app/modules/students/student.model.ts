import { Schema, model } from 'mongoose';
import type { Student, UserName } from './student-interface';

// UserName Schema
const UserNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [20, 'First name must be less than 20 characters'],
    // custom validator
    validate: {
      validator: function (value:string) {
        const firstNamestr =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        if (value !== firstNamestr) {
          return false;
        }
        return true;
      },
      message: '{VALUE} is not in capitalize format'
    },
  },
  middleName: {
    type: String,
    maxlength: [20, 'Middle name must be less than 20 characters'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    maxlength: [20, 'Last name must be less than 20 characters'],
  },
});

// Guardian Schema
const GuardianSchema = new Schema({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

// Local Guardian Schema
const LocalGuardianSchema = new Schema({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

// Student Schema
const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: [true, 'Student ID is required'],
    unique: true,
  },
  name: {
    type: UserNameSchema,
    required: [true, 'Name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: "Gender must be either 'male' or 'female'",
    },
    required: [true, 'Gender is required'],
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
  guardian: {
    type: GuardianSchema,
    required: [true, 'Guardian details are required'],
  },
  localGuardian: {
    type: LocalGuardianSchema,
    required: [true, 'Local Guardian details are required'],
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
});

// Export the Student Model
export const StudentModel = model<Student>('Student', studentSchema);
