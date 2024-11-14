// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
import express, { Request, Response, type NextFunction } from "express";

const app = express();
const port = 3000;

// parser

app.use(express.json());
app.use(express.text());


// router

const userRouter = express.Router()
const courseRouter = express.Router()
app.use('/api/v1/users',userRouter)
app.use('/api/v1/courses',courseRouter)



userRouter.get('/create-user',(req:Request, res:Response)=>{
    const user = req.body;
    console.log(user);
    res.json({
      success: true,
      message:"User is created",
      data:user
    })
})

courseRouter.post('/create-course',(req:Request,res:Response)=>{
  const user = req.body;
    console.log(user);
    res.json({
      success: true,
      message:"User is created",
      data:user
    })
})

const logger = (req: Request, res:Response, next:NextFunction)=>{
    console.log(req.url,req.method,req.hostname);
    next()
}

// app.get("/", logger, async (req: Request, res: Response) => {
//   try {
//     res.send(something); // error but not crush
//   } catch (err) {
//     res.status(400).json({
//       success: false,
//       message: "Failed to get data",
//     });
//   }
// });


app.get("/", logger, async (req: Request, res: Response, next:NextFunction) => {
  try {
    
  } catch (err) {
     next(err)
  }
});

// param

// app.get('/:userId/:subId', (req: Request, res: Response) => {
//   console.log(req.params);

//   res.send('Hello World!!');
// });

//  query
// http://localhost:5000?name="nafis"&&email="nafisahmad"
// app.get('/', (req: Request, res: Response) => {
//   console.log(req.query);
//   res.send('Hello World!!');
// });

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "Successfully recieve data",
  });
});

// if route is not found then it works

app.all("*",(req:Request,res:Response)=>{
    res.status(400).json({
      success:false,
      message:"Route is not found"
    })
})

// global error handler

app.use((error:any,req:Request,res:Response,next:NextFunction)=>{
    if(error){
       res.status(400).json({
         success:false,
         message:"Something went wrong"
       })
    }
    
})

export default app;
