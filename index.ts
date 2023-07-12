import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import routes from './routes/routes';
import dotenv from 'dotenv';
dotenv.config();

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error: any) => {
    // tslint:disable-next-line:no-console
    console.log(error)
})

database.once('connected', () => {
    // tslint:disable-next-line:no-console
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.use('/api', routes)

app.listen(3000, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server Started ts at ${3000}`)
})