// import { TStudent } from './student-interface';
import { Student } from './student.model';

// const createStudentIntoDB = async (studentData: TStudent) => {
//   if (await Student.isUserExists(studentData.id)) {
//     throw new Error('User already exists');
//   }

//   const result = await Student.create(studentData);

//   // built in static methods

//   // Now use instance method

//   // const student = new Student(studentData)
//   // // create ab instance

//   // if(await student.isUserExists(studentData.id)){
//   //      throw new Error('User already exists')
//   // }

//   // const result = await student.save()
//   // in instance method

//   return result;
// };

const getAllStudentsFromDB = async () => {
  const result = await Student.find().populate('admissionSemester').populate({
    path:'academicDepartment',
    populate:{
      path:'academicFaculty',
    },
  });
  return result;
};

const getSingleStudentsFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.findById(id).populate('admissionSemester').populate({
    path:'academicDepartment',
    populate:{
      path:'academicFaculty',
    },
  })
  return result;
};

const deleteStudentsFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  // createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
  deleteStudentsFromDB,
};
