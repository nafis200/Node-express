

// fix bug

// suppose Authum summar er roll mix up kore feleche

// Academic Faculty -------> make

// Academic department


// Student reference AcademicSemester

// AcademicDepartment refer AcademicFaculty

// Student also refer AcademicDepartment

// Now make academic Faculty

// Academic-department

// Validation can do two places

//  model and services

// when you populate from one database to another you must be populated by model name not model database name

// i dont use populate so academic-department and faculty doesnt come

// {
//     "success": true,
//     "message": "Student is created successfully",
//     "data": {
//         "id": "2031010003",
//         "user": "675a85219cb14c0bee851152",
//         "name": {
//             "firstName": "Nafis",
//             "middleName": "Ahmed",
//             "lastName": "Chowdhury",
//             "_id": "675a85229cb14c0bee851155"
//         },
//         "gender": "male",
//         "dateOfBirth": "2000-05-15",
//         "email": "nafisahamed2@example.com",
//         "contactNo": "01712345678",
//         "emergencyContactNo": "01812345678",
//         "bloodGroup": "A+",
//         "presentAddress": "123 Street Name, Dhaka, Bangladesh",
//         "permanentAddress": "456 Village Road, Sylhet, Bangladesh",
//         "localGuardian": {
//             "name": "Faruk Ahmed",
//             "occupation": "Engineer",
//             "contactNo": "01933445566",
//             "address": "789 Local Street, Dhaka, Bangladesh",
//             "_id": "675a85229cb14c0bee851156"
//         },
//         "profileImg": "https://example.com/profile.jpg",
//         "admissionSemester": "675984c0b1e98ec18f4c6c18",
//         "academicDepartment": "675a77235108bcbffbc122e6",
//         "isDeleted": false,
//         "_id": "675a85229cb14c0bee851154",
//         "__v": 0,
//         "fullname": "Nafis Ahmed Chowdhury"
//     }
// }


// student refer academic department again academic deparment refer academic faculty

// App Error 

// message Error class er property So throw it

// transaction and roleBack

// four principle of Transaction RollBack

// ACID

// Atomicity or all success or not success

// Consistensity

// debit ==== credit

// Icolation  dosent depend other system its work itself

// DURABILITY  

// when its save it is permanent and dosent matter what next

// Transaction ---------->

// User -----> Student

//  if user dosent create student not create

// first 
//   const session = await mongoose.startSession();

// Second

// session.startTransaction(); try block

// const result = await User.create([userData], { session });

// await session.commitTransaction()  durability
// await session.endSession

// if error abort it

// full example

// const session = await mongoose.startSession();

//   try { 
//     session.startTransaction();
//     userData.id = await generateStudentId(admissionSemester);

//     // transaction -------- 1

//     const result = await User.create([userData], { session });

//     // Now create a student and insert _id into studentId

//     if(!result.length) {
//           throw new AppError(404,'Dont create User')
//     }
//       //  set id, _id as user
//       // eslint-disable-next-line @typescript-eslint/no-unused-expressions
//       (payload.id = result[0].id),
//         // embedding id
//       (payload.user = result[0]._id);
//       // reference id

//       // Second transaction --------> 2

//       const newStudent = await Student.create([payload],{session});

//       if(!newStudent){
//         throw new AppError(404,'Dont create Student')
//       }

//       await session.commitTransaction()
//       await session.endSession
//       return newStudent;
    
    
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   } catch (error) {
//       await session.abortTransaction()
//       await session.endSession()
//     }


// both primitive and Non primitive field

// Primitive field e data muted hoy but non primitive e field e possible na

// Non primitive data updated into Student

// Name aslei hobe na as well as name er properties aste hobe

// name: {
//  fatherOcupaied: "Bussiness"
// }
// Object.keys(name).length  means fatherOccupied  or properties asche kina ta dekte hobe
// if (name && Object.keys(name).length) {
//     for (const [key, value] of Object.entries(name)) {
//       modifiedUpdatedData[`name.${key}`] = value;
//     }
//   }