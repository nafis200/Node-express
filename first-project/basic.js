
// Mongoose is ODM 

// typescript cors,mongoose, express js

//  npm init -y
//  npm i express

// npm install mongoose --save

// npm install typescript --save-dev

//  npm i cors

// npm i dotenv

//  npm install --save-dev @types/express

//  tsc -init

//  npm i --save-dev @types/cors

// tsconfig rootdir sec and outdir dist hobe

// app.ts e hello world er programme

//  package.json e build set

// app.ts er line server e copy korte hobe

//  moongose import

//  copy async function from mongoose and set server.js

//  work env file

// DATABASE_URL = mongodb+srv://admin-user:tEulJgxp4g2GNcQA@cluster0.f8w8siu.mongodb.net/first-project?retryWrites=true&w=majority&appName=Cluster0

// add name first-project

//  for port we create config folder and set index.ts

// for dotenv we go to docs and set env into index.ts fuile

// join the path to env by dotenv.config

// export the default path

//  set port into server.ts by config index.js

// now work server.ts e moongose er config

//  app.ts e parser set korte hobe.
// express and cors

// now go to typescript eslint docs and set up packge



// node .\dist\app.js 



// Now install EsLint and Prettier

//  add to line tsconfig.json

//   "include": ["src"], // which files to compile
//   "exclude": ["node_modules"], // which files to skip

// eslint.config.mjs e add rules first

// Eslint
// npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
// npx eslint --init

// ask some question and provide answer properply it give you eslint.config.mjs file

// @typescript-eslint/eslint-plugin

//  npm remove eslint beacuse of back 9.14

//   npm i -D eslint@9.14.0

// add script from docs

// npm run lint

// npm run lint:fix

// npm i -D --exact prettier

// "format": "prettier . --write" add this

// npm i --save-dev-prettier
// npm install --save-dev eslint-config-prettier
// ekdom upore khatar moton kichu ache ja click kore docs er dui line set korte hobe
// "editor.defaultFormatter": "esbenp.prettier-vscode",
//   "editor.formatOnSave": true,
// install npm i ts-node-dev
// npm i ts-node-dev --save-dev
// ts-node-dev --respawn --transpile-only src/server.ts 

// npm run start:dev

// this file will given

//  Software Design Pattern

//  MVC ----->    modules, view, controller  rearly use

// modular pattern is used 
// Scalibility
// maintainibility
// Better Refectoring

// two modle follow
//  Dry--->  Dont repeat yourself
//  Fat Model / Thin Controller

// moduler pattern is used follow is rule
//  1. Schema
//  2. Model
//  3. DB Query

// modles some file include

// interface

// Schema
// model
// database query according to model
// route
// controller
// services
//  Go to mongoose documentation and typescript part
//  and follow first four rules

// 1.first create an interface which is created by interface folder in file

// 2. Create a Schema corresponding to the document interface. which model.ts

// 3. Create an Model below is model
// export const User = model<Student>('User',studentSchema)

// after interface, schemam, model

// Process of the student

// 1. Request hit the route.ts
// 2. route call controller.ts
// 3. controller call service.ts
// 4. Service handle bussiness logic it query database from model and give controller
// Controller give response Client 

//  road map
    //  req
// Client ----> route.ts -----> controller.ts <---> service.ts 
              // req, res 
// service.ts --------------- database--> controller--->Client

// make a route.ts

// import express from 'express'

// const router = express.Router()

//  we call get put,patch delete make on router

// router.post('/create-student') its call controller.ts
// it is hit controller
// controller hit services.ts
// services.ts give response


//  show example app file 

//  last process

//  npm run lint
//  npm run prettier
// git add commit push


// module --------------------9----------------------------------------

//  npm i validator
// npm i @types/validator

// or use
// npm i joi

//  student.validation.ts joi er validate gulo bosiye daw

// controller request theke je data ta pabo take validation korar jonno joi or zod use korbo
// database e entry er age check korbo joi diye

// zod diye validation

// npm install zod 

// Monggose Custom instance Methods

//  schema ----> statics -----> model -----> call on model

//  mongoose Instance methods

//  schema ---> methods-----> model -----> Instance ---> call on instance

// instance schema method read docs

//  instance ----> model--->

//  first create interface into interface.ts
// second create method into interface.ts

// Put all user instance methods in this interface:

// interface IUserMethods {
//     fullName(): string;
//   }
  
//   // Create a new Model type that knows about IUserMethods...
//   type UserModel = Model<IUser, {}, IUserMethods>;

//  main implementation is done into model

// Sent model into studentSchema model.ts

// studentSchema add StudentModel and StudentMethod

// studentSchema.methods.isUserExists = async function(id: string){
  
//   const existingUser = await Student.findOne({id})
 
// id accept null or string so change Studentmethod | null

//   return existingUser

// }

// export const Student = model<TStudent,StudentModel>('Student', studentSchema);


// services.ts e query korbo

// model Student ke service.ts e niye asbo
// services.ts
//  const createStudentIntoDB = async (studentData: TStudent) => {
    //  const result = await Student.create(studentData)
//     const student = new Student(studentData)
    
//     if(await student.isUserExists(studentData.id)){
//         throw new Error('User already exists')
//     }

//     const result = await student.save()
//      return result;
// };

// new mongoose hoooooooooooooooooooooooooooooks

//  model.ts er schema kaj korte hoy

//  model giye first (save middleware pre post banate hobe)

// use studentSchema.pre post

// real life example 
// bcrypt the password
// install install bcrypt and npm i -D @types/bcrypt 

// Add config BCRYPT_GROUND_SALT

// config, env te change ante hobe

//  work pre schema

// if preschema work properly than give two function doc and next

//  doc updated documents

//  aggregate ke call korle current pipeline


// virtual apply into model schema

// we dont need store into database we use it

// studentSchema.virtual('fullname').get(function(){
//     return `${this.name.firstName} ${this.name.middleName || ''} ${this.name.lastName}`.trim();
  
//   })
  


// joi package

// npm i -D @types/validator  always install dependency

// build in method

//1. vercel CLI
//2.Github Vercel

// vercel cli...................................

// 1. Using vercel.json file
// 2. npm i -g vercel
//  vercel -v command use to check vercel is or not
// vercel login if dosent login

//  vercel --prod

// Link to existing project No

// if does not install vercel then step follow but i dont use it

//  npx vercel login

//  npx vercel --prod

//  Github

//  without install

// click add new button and project button

//  just  open build in dont hand root

//  intall command npm install
// environment varriable

