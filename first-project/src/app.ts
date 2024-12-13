import express, { Request, Response, Application } from 'express';

import cors from 'cors';

import globalErrorhandler from './app/middleware/global-error-handler';
import Notfound from './app/middleware/not-found';
import router from './app/routes';

import cookieParser from 'cookie-parser';

const app: Application = express();

// parser

app.use(express.json());
app.use(cookieParser())
app.use(cors({origin:['/localhost:5173']}));

app.use('/api/v1/', router);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!!!');
});

app.use(globalErrorhandler);

// not found

app.use(Notfound);

export default app;
