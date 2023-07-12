"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
// import routes from "./src/routes/routes"
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoString = process.env.DATABASE_URL;
mongoose_1.default.connect(mongoString);
const database = mongoose_1.default.connection;
database.on('error', (error) => {
    // tslint:disable-next-line:no-console
    console.log(error);
});
database.once('connected', () => {
    // tslint:disable-next-line:no-console
    console.log('Database Connected');
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use('/api', routes)
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(3000, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server Started at ${3000}`);
});
//# sourceMappingURL=index.js.map