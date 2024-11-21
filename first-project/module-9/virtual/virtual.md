

import { Schema, model } from 'mongoose';
import type { TStudent, StudentMethod, StudentModel, TUserName } from './student.interface';
import { TLocalGuardian } from './student.interface';
import validator from 'validator';
import bcrypt from 'bcrypt'
import config from '../../config';

const UserNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [20, 'First name less than 20'],
    validate: {
      validator: function (value: string) {
        const firstName = value.charAt(0) + value.slice(1).toLowerCase();

        if (firstName !== value) {
          return false;
        }
        return true;
      },
      message: `{VALUE} is not capitalize`
    },
  },
  middleName: {
    type: String,
    maxlength: [20, 'Middle name must be less than 20'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    maxlength: [20, 'Last name must be less than 20'],
    // custom validator
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid',
    },
  },
});

const LocalGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<TStudent,StudentModel,StudentMethod>({
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
    type: LocalGuardianSchema,
    required: [true, 'Local Gurdian details are required'],
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
    default: false,
  },
},{
    toJSON:{
      virtuals: true
    }
});