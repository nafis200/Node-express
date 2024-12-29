

// step 

// Authmn 2030 or suumar 2030 or Fall 2030

// UpComming or Ongoing or Ended

//  2030-01-10 10.00 am

//  2030-01-24  11.59pm

// Min Credit     03

// Max Credit     01

// bussiness logic for create and update

// suppose your semester Upcomming or Ongoing

// registration upcomming 

// if any semester upcomming or Ongoing then we cant create any semester register

// upcomming ----> Ongoing ----> Ended  One way

// Created Offer course

// Autumn 2030

// Faculty of web courses

// when it selected automated set into l1

// department of L1

// HTML

// Jhankar 

// 1


// Validate Time With Hour Min Format

// Time validation TCourses 



// const timeStringSchema = z.string().refine(
//     (time) => {
//       const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/; // 00-09 10-19 20-23
//       return regex.test(time);
//     },
//     {
//       message: 'Invalid time format , expected "HH:MM" in 24 hours format',
//     },
//   );
  


// startTime < EndTime So validation Check

// const createOfferedCourseValidationSchema = z.object({
//     body: z
//       .object({
//         semesterRegistration: z.string(),
//         academicFaculty: z.string(),
//         academicDepartment: z.string(),
//         course: z.string(),
//         faculty: z.string(),
//         section: z.number(),
//         maxCapacity: z.number(),
//         days: z.array(z.enum([...Days] as [string, ...string[]])),
//         startTime: timeStringSchema, // HH: MM   00-23: 00-59
//         endTime: timeStringSchema,
//       })
//       .refine(
//         (body) => {
//           // startTime : 10:30  => 1970-01-01T10:30
//           //endTime : 12:30  =>  1970-01-01T12:30
  
//           const start = new Date(`1970-01-01T${body.startTime}:00`);
//           const end = new Date(`1970-01-01T${body.endTime}:00`);
  
//           return end > start;
//         },
//         {
//           message: 'Start time should be before End time !  ',
//         },
//       ),
//   });




// You must arraise time Confliction


