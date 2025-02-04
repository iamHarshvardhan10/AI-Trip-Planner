import sendMail from "../mail/sendemail.js";
import mongoose from "mongoose";
import otpTemplate from "../mail/templates/emailVerificationTemplates.js";


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

const sendVerificationEmail = async (email, otp) => {
    try {
        const emailResponse = await sendMail(email, 'Verification Email', otpTemplate(otp))
        console.log(emailResponse.response)
    } catch (error) {
        console.log(error.message)
    }
}

// Pre Hook Middleware Before signin OTP will store in database

OTPSchema.pre("save", async function (next) {
    console.log('New Document saved');
    if (this.isNew) {
        await sendVerificationEmail(this.email, this.otp)
        next();
    }
})

const OTP = mongoose.model('OTP', OTPSchema);

export default OTP;