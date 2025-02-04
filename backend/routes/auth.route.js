import { login, register, sentOtp } from '../controllers/auth.controllers.js';
import express from 'express';

const router = express.Router();


// Route for Register
router.post('/register', register)

// Route for login
router.post('/login', login)
// Route for SEND OTP

router.post('/sendOTP', sentOtp)

// Route for change Password

// Route for reset Password token

// Route for reset Password


export default router;