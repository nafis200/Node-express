import { z } from 'zod';

// UserName Schema
const UserNameValidationSchema = z.object({
firstName: z
.string()
.min(1, { message: 'First name is required' })
.max(20, { message: 'First name must be less than 20 characters' })
.regex(/^[A-Z][a-z]\*$/, {
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
const createStudentValidationSchema = z.object({
id: z
.string()
.min(1, { message: 'Student ID is required' })
.max(50, { message: 'Student ID must be less than 50 characters' })
.regex(/^[a-zA-Z0-9]+$/, { message: 'Student ID must be alphanumeric' }),

password: z.string().max(20),

name: UserNameValidationSchema,

gender: z.enum(['male', 'female'], {
message: "Gender must be either 'male' or 'female'",
}),

dateOfBirth: z.string().min(1, { message: 'Date of birth is required' }),

email: z
.string()
.email({ message: 'Invalid email address' })
.min(1, { message: 'Email is required' }),

contactNo: z.string().min(1, { message: 'Contact number is required' }),

emergencyContactNo: z
.string()
.min(1, { message: 'Emergency contact number is required' }),

bloodGroup: z
.enum(['A+', 'A-', 'B+', 'B-', 'O+', 'O-'], {
message: "Blood group must be one of 'A+', 'A-', 'B+', 'B-', 'O+', 'O-'",
})
.optional(),

presentAddress: z.string().min(1, { message: 'Present address is required' }),

permanentAddress: z
.string()
.min(1, { message: 'Permanent address is required' }),

guardian: GuardianValidationSchema,

localGuardian: LocalGuardianValidationSchema,

profileImg: z.string().default('default-profile.png'),

isActive: z
.enum(['active', 'inactive'], {
message: "Status must be either 'active' or 'inactive'",
})
.default('active'),
isDeleted: z.boolean()
});

// Export the Zod schema
export default createStudentValidationSchema;
