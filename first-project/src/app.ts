import express, { Request, Response, Application } from 'express';

import cors from 'cors';
import { StudentRoutes } from './app/modules/students/student.route';

const app: Application = express();

// parser

app.use(express.json());
app.use(cors());


// application route
// it goes students routes
app.use('/api/v1/students',StudentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!!!');
});

// console.log(process.cwd());

export default app;
