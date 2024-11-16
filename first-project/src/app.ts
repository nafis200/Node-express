import express, { Request, Response, Application } from 'express';

import cors from 'cors';

const app: Application = express();

// parser

app.use(express.json());
app.use(cors());


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// console.log(process.cwd());

export default app;
