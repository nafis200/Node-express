import { z } from 'zod';

// UserName Schema
const UserNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'First name is required' })
    .max(20, { message: 'First name must be less than 20 characters' })
    .regex(/^[A-Z][a-z]*$/, {
      message: 'First name must be in capitalize format',
    }),

  middleName: z
    .string()
    .max(20, { message: 'Middle name must be less than 20 characters' }),

  lastName: z
    .string()
    .min(1, { message: 'Last name is required' })
    .max(20, { message: 'Last name must be less than 20 characters' })
    .regex(/^[A-Za-z]+$/, {
      message: 'Last name must be alphabetic characters only',
    }),
});

// Guardian Schema
const GuardianValidationSchema = z.object({
  fatherName: z.string().min(1, { message: "Father's name is required" }),
  fatherOccupation: z
    .string()
    .min(1, { message: "Father's occupation is required" }),
  fatherContactNo: z
    .string()
    .min(1, { message: "Father's contact number is required" }),
  motherName: z.string().min(1, { message: "Mother's name is required" }),
  motherOccupation: z
    .string()
    .min(1, { message: "Mother's occupation is required" }),
  motherContactNo: z
    .string()
    .min(1, { message: "Mother's contact number is required" }),
});

// Local Guardian Schema
const LocalGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: "Local Guardian's name is required" }),
  occupation: z
    .string()
    .min(1, { message: "Local Guardian's occupation is required" }),
  contactNo: z
    .string()
    .min(1, { message: "Local Guardian's contact number is required" }),
  address: z
    .string()
    .min(1, { message: "Local Guardian's address is required" }),
});

// Student Schema
export const studentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: UserNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.string().optional(),
      email: z.string().email(),
      contactNo: z.string(),
      emergencyContactNo: z.string(),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      guardian: GuardianValidationSchema,
      localGuardian: LocalGuardianValidationSchema,
      profileImg: z.string(),
    }),
  }),
});
// Export the Zod schema
export const studentValidations = {
  studentValidationSchema,
};
