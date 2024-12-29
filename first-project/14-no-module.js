


// Error handleling

// operational Error
// Programming Error
// unhandled Rejection (Async)
// Caught Exceptional (Sync)

// four properties get
// success, message, errorSources, Stack

// stack give path

// pattern

// success
// message
// errorSuccess:[
//  path: '',
// message:''
// ]
// stack


// zod error when i missing some properties of interface

// // {
//     "success": false,
//     "message": "[\n  {\n    \"code\": \"invalid_type\",\n    \"expected\": \"string\",\n    \"received\": \"undefined\",\n    \"path\": [\n      \"body\",\n      \"name\"\n    ],\n    \"message\": \"Name is required\"\n  }\n]",
//     "error": {
//         "issues": [
//             {
//                 "code": "invalid_type",
//                 "expected": "string",
//                 "received": "undefined",
//                 "path": [
//                     "body",
//                     "name"
//                 ],
//                 "message": "Name is required"
//             }
//         ],
//         "name": "ZodError"
//     }
// }

// I handled it global error handlelar



// Mongoose Error stop zod validation error into post method middleware


// {
//     "success": false,
//     "message": "AcademicDepartment validation failed: name: Path `name` is required.",
//     "stack": "ValidationError: AcademicDepartment validation failed: name: Path `name` is required.\n    at model.Document.invalidate (D:\\practice-8\\node_modules\\mongoose\\lib\\document.js:3318:32)\n    at D:\\practice-8\\node_modules\\mongoose\\lib\\document.js:3079:17\n    at D:\\practice-8\\node_modules\\mongoose\\lib\\schemaType.js:1388:9\n    at processTicksAndRejections (node:internal/process/task_queues:85:11)"
// }

// when add error properties into global.error handler then give


// {
//     "success": false,
//     "message": "AcademicDepartment validation failed: name: Path `name` is required.",
//     "err": {
//         "errors": {
//             "name": {
//                 "name": "ValidatorError",
//                 "message": "Path `name` is required.",
//                 "properties": {
//                     "message": "Path `name` is required.",
//                     "type": "required",
//                     "path": "name"
//                 },
//                 "kind": "required",
//                 "path": "name"
//             }
//         },
//         "_message": "AcademicDepartment validation failed",
//         "name": "ValidationError",
//         "message": "AcademicDepartment validation failed: name: Path `name` is required."
//     },
//     "stack": "ValidationError: AcademicDepartment validation failed: name: Path `name` is required.\n    at model.Document.invalidate (D:\\practice-8\\node_modules\\mongoose\\lib\\document.js:3318:32)\n    at D:\\practice-8\\node_modules\\mongoose\\lib\\document.js:3079:17\n    at D:\\practice-8\\node_modules\\mongoose\\lib\\schemaType.js:1388:9\n    at processTicksAndRejections (node:internal/process/task_queues:85:11)"
// }





// {
//     "success": false,
//     "message": "This department already exists",
//     "error": {}
// }


// zod last index e specefic path dey so you need last index

// make a interface folder and create error.ts for interface

// stack sent korbo just development e


// when i sent wrong id for get single data this error is given

// {
//     "success": false,
//     "message": "Cast to ObjectId failed for value \"fddbcbv\" (type string) at path \"_id\" for model \"AcademicDepartment\"",
//     "err": {
//         "stringValue": "\"fddbcbv\"",
//         "valueType": "string",
//         "kind": "ObjectId",
//         "value": "fddbcbv",
//         "path": "_id",
//         "reason": {},
//         "name": "CastError",
//         "message": "Cast to ObjectId failed for value \"fddbcbv\" (type string) at path \"_id\" for model \"AcademicDepartment\""
//     }
// }




// code for global error handlear

// const globalErrorhandler:ErrorRequestHandler = (err, req, res, next) => {
//   let statusCode = 500;
//   let message = err.message;
//   let errorSources: TErrorSource[{
//     path: '';
//     message: '';
//   }];

//   if (err instanceof ZodError) {
//     const simplifiedError = handleZodError(err);
//     statusCode = simplifiedError?.statusCode;
//     message = simplifiedError?.message;
//     errorSources = simplifiedError?.errorSources;
//   }

//   else if (err?.name === 'ValidationError') {
//     const simplifiedError = handleValidationError(err);
//     statusCode = simplifiedError?.statusCode;
//     message = simplifiedError?.message;
//     errorSources = simplifiedError?.errorSources;
//   }
//     return res.status(statusCode).json({
//       success: false,
//       message,
//       errorSources,
//       err,
//       // stack: config.node_env === 'development' ? err?.stack : null,
//     });
//   };

//   export default globalErrorhandler


// where we extract message after success it is dynamic
// keyvalue dynamic if email problem give email



// duplicate error when we try all unique value entry database and model presave method command then give this error

// {
//     "success": false,
//     "message": "E11000 duplicate key error collection: first-project.academicdepartments index: name_1 dup key: { name: \"Department of cse\" }",
//     "err": {
//         "errorResponse": {
//             "index": 0,
//             "code": 11000,
//             "errmsg": "E11000 duplicate key error collection: first-project.academicdepartments index: name_1 dup key: { name: \"Department of cse\" }",
//             "keyPattern": {
//                 "name": 1
//             },
//             "keyValue": {
//                 "name": "Department of cse"
//             }
//         },
//         "index": 0,
//         "code": 11000,
//         "keyPattern": {
//             "name": 1
//         },
//         "keyValue": {
//             "name": "Department of cse"
//         }
//     }
// }


// when we command model 

// academicDepartmentSchema.pre('save', async function (next) {
//   const isDepartmentExists = await AcademicDepartment.findOne({
//     name: this.name,
//   });

//   if (isDepartmentExists) {
//     throw new AppError(404, 'This department already exists');
//   }
//   next();
// });









// UnhandledRejection and UncaughtException

// unhandledRejection for async

// app.ts

// const test = async(req:Request,res:Response)=>{
//     Promise.reject()
//    }
//    app.get('/',test)

// server.ts


// import app from './app';
// import mongoose from 'mongoose';
// import config from './app/config';

// import { Server } from 'http';

// let server: Server;

// async function main() {
//   try {
//     await mongoose.connect(config.database_url as string);
//     server = app.listen(config.port, () => {
//       console.log(`Example app listening on port ${config.port}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// main();

// process.on('unhandledRejection',()=>{
//   console.log('unhaandldRejection is detected, shutting down');
  
//   if(server){
//     server.close(()=>{
//       process.exit(1)
//     })
//   }
//   process.exit(1)
// })

// uncaughtRejection

// process.on('uncaughtException',()=>{
//     console.log('UncaughtRejection is handled, shutting down......');
//     process.exit(1)
//  })




// Raw Search  filter and searchTerm

// searchTerm partial Match   3 and 4 types use mezba vai

// vai use just 1 pattern

// searchTerm use student controllers and services of all students

// {email: {$regex: query.searchTerm, $options: i} } for email

// {password: {$regex: query.searchTerm, $options: i} } for password

// 1........n to we write 100times so we use dynamic field using map

 //   let searchTerm = ''

  //   if(query?.searchTerm){
  //       searchTerm = query?.searchTerm as string
  //   }

   // const studentSearchFields = ['email','name.firstName','presentAddress'] ei field gulote chalate cai


    //   const seachQuery = Student.find({
  //     $or: studentSearchFields.map((field)=>({
  //       [field]: {$regex: searchTerm, $options: 'i'}
//     same pattern e sent korte hobe
  //     }))
  //  })
//   partial match korbe




// Now We do Chaning method so we dont use await



// {{ph-local-url}}/students?searchTerm=nafis&&email=nafisahamed2@example.com
// {{ph-local-url}}/students?sort=email for sorting field
 //   const excludeFields = ['searchTerm','sort','limit','page','fields']

//  {{ph-local-url}}/students?page=1&&limit=2

// {{ph-local-url}}/students?fields=name,email

//  we use it


// we search by email field searchTerm is partial optional

// So we delete searchTerm from query

// But we need it after so we need another varriable

//   const queryobj = {...query}

 //   const excludeFields = ['searchTerm','sort','limit','page','fields']

  //   excludeFields.forEach(el => delete queryobj[el])
//   Student.find({query}) eikhane query dibo na queryobj dibo


// for sorting 

//  //   let sort = '-createdAt'
  //   if(query.sort){
  //     sort = query.sort as string
  //   }

// 

// 2nd chaining //   const sortQuery =  filterQuery.sort(sort)



// For pagination query and chaining


 //   const sortQuery =  filterQuery.sort(sort)

  //   let page = 1
  //   let limit = 1
  //   let skip = 0

  //   if(query.limit){
  //     limit = Number(query.limit)
  //   }

  //   if(query.page){
  //      page = Number(query.page)
  //      skip = (page - 1) * limit
  //   }

  //   const paginateQuery = sortQuery.skip(skip)

// field limiting

// data asbe fields= name,email

// so distruct it and use spliting and join beacuse of name email


  //   let fields = '-__v'

  //   if(query.fields){
  //     fields = (query.fields as string).split(',').join(' ')
  //   }

  //   const fieldQuery = await limitQuery.select(fields)

//   now get name and email


// field name dile error asbe beacuse student model virtual hisabe name cheyechile so use ?

// studentSchema.virtual('fullname').get(function(){
//   return `${this?.name?.firstName} ${this?.name?.middleName || ''} ${this?.name?.lastName}`.trim();

// })


// So clean code we make builders folder and place it Querybuilders.ts