

// JWT_ACCESS_SECRET = d76563dd6c7b4a0a4246beabb6875e8cbc31beaf9fb447dcdb0183ea82da994e
// JWT_REFRESH_SECRET = d5b7ef6638570aa71f037d3b79e778f5714a70bafd68ec22f9d25ed89de018a41575159680944e3e582241172289f8633b54c2a7a28b48d9ddcd097e0406a78e
// JWT_ACCESS_EXPIRES_IN=1d
// JWT_REFRESH_EXPIRES_IN=365d

// # node terminal call
// # require('crypto').randomBytes(32).toString('hex')

// Authentication and Authoraization

// Authentication dosent need any model

// make an auth interface

// Create Admin by postman

// First of all findUser into Auth.services

// Now check user is delete or not

// user status is inprogress or blocked

// //checking if the password is correct

// Statistics Model

// Create UserModel into Usermodel and USerInterface

// JWT TOKEN

// Looks Like

// Header


// payload   iat exp set in jwt    


// signature

// 1st and 2nd part visible and 3rd part are not visible

//  Now jwt is create

// //create token and sent to the  client

//   const jwtPayload = {
//     userId: user.id,
//     role: user.role,
//   };


// //  const accessToken = createToken(
//     jwtPayload,
//     config.jwt_access_secret as string,
//     config.jwt_access_expires_in as string,
//   );


// We sent token now How to validate it

// Token manually sent each and every Request

// Headers Authoraization e token set korbo

// Now create middleware Auth.ts into middleware folder

// Headers sent kora token niue nilam


// Verify Token


// const decoded = jwt.verify(
//     token,
//     config.jwt_access_secret as string,
//   ) as JwtPayload;

// jwt.verify(
//     token,
//     config.jwt.access_secret as String,
//     function(err,decoded){
//         if(err){
//             throw new AppError(
//                 httpStatus.UNAUTHORIZED,
//                 "You are not authoraized"
//             )
//         }
        // console.log(decoded);
        
//     }
// )

// Now destructure UserId and password


// We create interface  interface folder index.d.ts and set below the code as a Request for express.js

// import { JwtPayload } from 'jsonwebtoken';

// declare global {
//     namespace Express {
//       interface Request {
//         user: JwtPayload;
//       }
//     }
//   }

// Auth.ts error is gone req.user now easily understand

// We get req.user each and every controller

// Get all faculty route hit korle req.user er maddome all token pabo

// Student Student create korche eita ki hoilo 

// Admin Student create korbe So

// Who is access it

// Admin Guard delcared STudent route create post only admin token access this

// Now check where admin or faculty or student access or not

//  if (requiredRoles && !requiredRoles.includes(role)) {
        // throw new AppError(
        //         httpStatus.UNAUTHORIZED,
        //         'You are not authorized  hi!',
        //       );
        //     }

        // const auth = (...requiredRoles: TUserRole[]) => {


// Now Auth Validation do at AuthValidation.ts

// tumi old password diye password change korte parba new password diye parbe na

// Create Change password services

// I decoded and get data from token and i must be set auth() into route
// beacus of it get it

// req.user jwtPayload

// implement Password Updating and Track Timestamp

// When password is change i take its updated

// Timestamp  delete holeo update hobe create holeo update hobe i need it specefic

// So User model passwordChangeAt rakbo


// block korar poro token diye access korche so solve it

// when token stolen and password change new token is valid and old token invalid so solve it

// password change and validation auth

// Refresh Token store in cookie

// Create jsonwebtoken at Auth folder auth.utils.ts

// After response serive access Token and refresh Token is Come we set it into cookie we get cookie controller Now we set at LoginUser controller into Auth.Controller.ts

// For testing purpose we set console.log(req.cookie)
// at any routes to hit

// For cookie parsing we need express.json cookie parser

// login and refresh token doesnt use auth guard

// Now validation for cookies at auth.validation.ts

// Now make refreshToken controller
