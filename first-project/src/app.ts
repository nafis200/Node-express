import express, { Request, Response, Application} from 'express';

import cors from 'cors';

import globalErrorhandler from './app/middleware/global-error-handler';
import Notfound from './app/middleware/not-found';
import router from './app/routes';

const app: Application = express();

// parser

app.use(express.json());
app.use(cors());

// application route
// it goes students routes
app.use('/api/v1/', router);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!!!');
});

// console.log(process.cwd());

// global error handler

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   const statusCode = 500;
//   const message = err.message || 'Something went wrong';

//   return res.status(statusCode).json({
//     success: false,
//     message,
//     error: err,
//   });
// });

app.use(globalErrorhandler)

// not found 

app.use(Notfound)


export default app;
