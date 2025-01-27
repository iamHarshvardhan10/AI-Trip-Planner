/* eslint-disable no-undef */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import dbConnect from './config/dbconnection.js';
// import sendMail from './mail/sendemail.js';
dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({

}))

app.get('/', (req, res) => {
    res.json({
        message: 'server is running'
    })
})


// sendMail('harshvardhanpb415@gmail.com' , 'hello test email' , 'its testing email')

app.listen(PORT, () => {
    console.log('Server is running on port 8080')
    dbConnect();
})