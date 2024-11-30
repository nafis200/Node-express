
// ph university module-1

// requirement make

// ER Diagram make

// Common User Collection make from admin faculty student data

// make folder user ---- routes ----- utils ---- middleware 

//  User models

// create user-interface.ts

//  create an User-model

//  we create student-post route into User so pulling the Create-students from student-routes to user routes

// Student post controller pull into User controller

// student Create Services pull into user services

// User services converted into refector code

// import type { TStudent } from "../students/student.interface";
// import { User } from "./user-model";


// const createStudentIntoDB = async(studentData: TStudent) =>{
    
//     const result = await User.create(studentData)
//     return result

// }

// export const UserServices = {
//     createStudentIntoDB
// }

// refector route controller services 

// from ER Diagram we see first we create user then relation with student collection so we change the createStudentInToDB

//  Controller convert StudentServices into UserServices

// refector User services

// if(!password){
//     password = password || (config.default_password as string)
// }

// password asle password or default password


// user e role set korte hobe but user.role name kono interface nai So interface create

// Now connection create User into Student collection

// //    see model.ts you just need id,password,role

// you must be need id,password,role


    
// if(!password){
//     user.password =config.default_password as string
// } else{
//     user.password = password
// }

//  user.role = 'student'

//  user.id = '200129'



// const result = await User.create(user)
 
// // Now create a student and insert _id into studentId

// if(Object.keys(result).length){
//     //  set id, _id as user
//     studentData.id = result.id,
//     studentData.user = result._id
// }

// when user created now connected with student
// student.id = result.id
// student.user = result._id see diagram

// user Tstudent er interface e nai so refector it

// New User use na kore partial vabe TUser ke use korte pari

// now add user variable as student and model types of ObjectId as a interfaceing

// and model must be tell User

// Now modify student model and interface according to diagram remove isActive and password

// password er hash Student theke User e niye jabo
// So middleWare is converted from student to user

// then data is set properly

// rearrange status(200).json({})

// So call next function
// first work error so bring next parameter

// first we make global error handler at app.ts

// use it app.ts global error handler

// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   const statusCode = 500;
//   const message = err.message || 'Something went wrong';

//   return res.status(statusCode).json({
//     success: false,
//     message,
//     error: err,
//   });
  
// });

// next function work now properly

// more organise we create an middleware folder to handle this

// use global error handler

// find a not found middleware

// if you hit wrong api find it Not found

// sendResponse file make an utils and get this

// Now make a route folder into index.ts