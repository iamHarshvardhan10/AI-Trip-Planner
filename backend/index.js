/* eslint-disable no-undef */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import dbConnect from './config/dbconnection.js';
import cloudinaryConnect from './config/cloudinary.js';
import fileUpload from 'express-fileupload';
// import sendMail from './mail/sendemail.js';
dotenv.config();

// ROUTES PATH
import authRoutes from './routes/auth.route.js'
import tripRoutes from './routes/trip.route.js'
import profileRoutes from './routes/profile.route.js'
import connectionRoutes from './routes/friend.route.js'
const app = express();

const PORT = process.env.PORT;
// EXPRESS - FILE UPLOAD
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
}))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    credentials: true
}))

app.options("*", cors());






// CLOUDINARY CONNECTION
cloudinaryConnect();


// AUTH ROUTES
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/trip', tripRoutes)
app.use('/api/v1/profile', profileRoutes)
app.use('/api/v1/connection', connectionRoutes)

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