import express, { Request, Response, Application } from 'express';

import cors from 'cors';

import globalErrorhandler from './app/middleware/global-error-handler';
import Notfound from './app/middleware/not-found';
import router from './app/routes';

const app: Application = express();

// parser

app.use(express.json());
app.use(cors());

app.use('/api/v1/', router);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!!!');
});

app.use(globalErrorhandler);

// not found

app.use(Notfound);

export default app;
