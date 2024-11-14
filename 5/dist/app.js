"use strict";
// const express = require('express')
// const app = express()
// const port = 3000
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// parser
app.use(express_1.default.json());
app.use(express_1.default.text());
// router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use('/api/v1/users', userRouter);
app.use('/api/v1/courses', courseRouter);
userRouter.get('/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is created",
        data: user
    });
});
courseRouter.post('/create-course', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is created",
        data: user
    });
});
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
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
app.get("/", logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
        next(err);
    }
}));
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
app.post("/", (req, res) => {
    console.log(req.body);
    res.json({
        message: "Successfully recieve data",
    });
});
// if route is not found then it works
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route is not found"
    });
});
// global error handler
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong"
        });
    }
});
exports.default = app;
