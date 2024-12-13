
// make a catchAsync higher order function to reduced try catch

// dry method to code reduced

// make utils files into catchAsync.ts and paste its code

// replace student controller Catchasyn function

// const getAllStudents = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   try {
//     const result = await StudentServices.getAllStudentIntoDB();
//     sendResponse(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Student data Get successfully',
//       data: result,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// after catchAsync the function is 

// const getAllStudents = catchAsync(async (req,res) => {
//     const result = await StudentServices.getAllStudentIntoDB();
//     sendResponse(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: 'Student data Get successfully',
//       data: result,
//     });
//   })
  


// middleware 
// client  ------->Route------> middleware---->Controller----->services

// Validation middleware


// higher order function

// const shenabahini = (req,res,next)=>{
    // it assign just req,res,next
// }
// how can you pass parameter

// make higher order function

//  const shena = (name)=>{
    //  return async (req,res,next)=>{
        // next() 
    // } 
// }

// student ---------> User ----------> Academic Semister

//  Academic Semister ----------> controll,service,route,validation


// bussiness logic

// 2030 Autum => created
// 2031 Autum => created

// you cant handle it by unique

// logic impleplent at model


// const isSemesterExists = await AcademicSemister.findOne({
//     name: this.name,
//     year: this.year
// })

// if(isSemesterExists){
//     throw new Error('Semester is already exists')
// }
// next()

// now mapping at service for name and code

// export type TAcademicSemesterNameCodeMapper = {
//     [key:string]: string
//  }

// key string ja hold kore taw string



//  Connect admission_Semester into academic_Semester

// now set student interface set in acedemicsemister where academic model include

// now logic handle roll wise

// const createStudentIntoDB = async (password: string, studentData: TStudent) => {
//   const userData: Partial<TUser> = {};

//   if (!studentData) {
//     throw new Error('studentData is undefined or null');
//   }

  //    see model.ts you just need id,password,role

// mannual

//   if (!password) {
//     userData.password = config.default_password as string;
//   } else {
//     userData.password = password;
//   }

//   userData.role = 'student';

//   userData.id = '200129';

//   const result = await User.create(userData);

//   // Now create a student and insert _id into studentId

//   if (result) {
//     //  set id, _id as user
//     (studentData.id = result.id),
//       // embedding id
//       (studentData.user = result._id);
//     // reference id
//     const newStudent = await Student.create(studentData);
//     return newStudent;
//   }
// };


//  2030 01 0000 now generate this

// first create

// const admissionSemester = await AcademicSemister.findById(payload.admissionSemester)

//   userData.id = generateStudentId();

// make generateId into user.utils file

//  now implement logic