"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const global_error_handler_1 = __importDefault(require("./app/middleware/global-error-handler"));
const not_found_1 = __importDefault(require("./app/middleware/not-found"));
const routes_1 = __importDefault(require("./app/routes"));
const app = (0, express_1.default)();
// parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/v1/', routes_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!!!!');
});
app.use(global_error_handler_1.default);
// not found
app.use(not_found_1.default);
exports.default = app;
