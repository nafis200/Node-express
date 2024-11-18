import Joi from 'joi';

const UserNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .max(20)
    .pattern(/^[A-Z][a-z]*$/, 'first name capitalization')
    .message('{#label} must be in capitalize format'),
  middleName: Joi.string().max(20),
  lastName: Joi.string()
    .required()
    .max(20)
    .regex(/^[A-Za-z]+$/, 'letters only')
    .message('{#label} is not valid'),
});

// Guardian Schema
const GuardianValidationSchema = Joi.object({
  fatherName: Joi.string().required(),
  fatherOccupation: Joi.string().required(),
  fatherContactNo: Joi.string().required(),
  motherName: Joi.string().required(),
  motherOccupation: Joi.string().required(),
  motherContactNo: Joi.string().required(),
});

// Local Guardian Schema
const LocalGuardianValidationSchema = Joi.object({
  name: Joi.string().required(),
  occupation: Joi.string().required(),
  contactNo: Joi.string().required(),
  address: Joi.string().required(),
});

// Student Schema
const studentValitaionSchema = Joi.object({
  id: Joi.string().required().max(50).alphanum(),
  name: UserNameValidationSchema.required(),
  gender: Joi.string()
    .valid('male', 'female')
    .required()
    .messages({ 'any.only': 'Gender must be either "male" or "female"' }),
  dateOfBirth: Joi.string().required(),
  email: Joi.string().email().required(),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloodGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'O+', 'O-').messages({
    'any.only': "Blood group must be one of 'A+', 'A-', 'B+', 'B-', 'O+', 'O-'",
  }),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().required(),
  guardian: GuardianValidationSchema.required(),
  localGuardian: LocalGuardianValidationSchema.required(),
  profileImg: Joi.string().default('default-profile.png'),
  isActive: Joi.string()
    .valid('active', 'inactive')
    .default('active')
    .messages({ 'any.only': "Status must be either 'active' or 'inactive'" }),
});

export default studentValitaionSchema