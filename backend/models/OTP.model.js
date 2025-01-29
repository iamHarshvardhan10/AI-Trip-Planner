import mongoose from "mongoose";


const OTPSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 5 * 60 // 1 minute
    }
})


// Sending OTP Via Email

// Pre Hook Middleware Before signin OTP will store in database



const OTP = mongoose.model('OTP', OTPSchema);

export default OTP;