import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

const morgan = require('morgan');

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const PORT: string | number = process.env.APP_PORT || 8000;
const uri: string = process.env.MONGODB_URI || '';

(async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to the database');

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error(error);
    }
})();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World with TypeScript and Express!');
});

