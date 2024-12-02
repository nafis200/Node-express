import { Schema, model } from 'mongoose';
import type {
  TStudent,
  // StudentMethods,
  StudentModel,
  TUserName,
} from './student-interface';

// Import library
import validator from 'validator';
// import bcrypt from 'bcrypt';
// import config from '../../config';
// TUserName Schema
const TUserNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [20, 'First name must be less than 20 characters'],
    // Custom validator
    validate: {
      validator: function (value: string) {
        const firstNamestr =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        if (value !== firstNamestr) {
          return false;
        }
        return true;
      },
      message: '{VALUE} is not in capitalize format',
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
    // Built-in third party
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid',
    },
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
const studentSchema = new Schema<TStudent, StudentModel>({
  id: {
    type: String,
    required: [true, 'Student ID is required'],
    unique: true,
  },
  user:{
    type: Schema.Types.ObjectId,
    required:[true, 'Student ID is required'],
    unique:true,
    ref:'User',
  },
  // password: {
  //   type: String,
  //   required: [true, 'password ID is required'],
  //   unique: true,
  //   maxlength: [20, 'password should be under 20 charcter'],
  // },
  name: {
    type: TUserNameSchema,
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
  admissionSemester:{
    type: Schema.Types.ObjectId,
    ref:'AcademicSemister'
  },
  academicDepartment:{
     type:Schema.Types.ObjectId,
     ref:'AcademicDepartment'
  },
  isDeleted: {
    type: Boolean,
    default:false
  }
},{
  toJSON:{
    virtuals: true,
  }
});

// Export the Student Model

// creating a custom instance method

// studentSchema.methods.isUserExists = async function (id: string) {
//   const existingUser = await Student.findOne({ id: id });
//   return existingUser;
// };

// virtual

studentSchema.virtual('fullname').get(function(){
  return `${this.name.firstName} ${this.name.middleName || ''} ${this.name.lastName}`.trim();

})

// pre save middleware/hook: will work create() save()

// studentSchema.pre('save',async function (next) {
//   //  console.log(this, 'pre hook: we will save to data');
//   // eslint-disable-next-line @typescript-eslint/no-this-alias
//   const user = this;
//   // hasing password and save into db
//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.brcypt_salt_rounds),
//   );
//   next()
// });

// post save middleware / hook

// studentSchema.post('save', function (doc,next) {

//   doc.password=' '

//   // console.log(this, 'post hook: we saveed our data');
//   next()
// });


// query middleware


studentSchema.pre('find', function(next){
   
    this.find({isDeleted: {$ne: true}})
    // console.log(this);
    next()
})

studentSchema.pre('findOne', function(next){
   
  this.find({isDeleted: {$ne: true}})
  // console.log(this);
  next()
})

studentSchema.pre('aggregate', function(next){
   
  // this.find({isDeleted: {$ne: true}})
  // console.log(this);
  // console.log(this.pipeline());
  this.pipeline().unshift({$match: {isDeleted: {$ne: true}}})
  next()
})




// creating a custom static methods

studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });

  return existingUser;
};

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
