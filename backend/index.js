import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import dbConnect from './config/dbconnection.js';
dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({

}))

app.get('/', (req, res) => {
    res.json({
        message: 'server is running'
    })
})

app.listen(8080, () => {
    console.log('Server is running on port 8080')
    dbConnect();
})