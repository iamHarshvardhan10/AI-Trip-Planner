/* eslint-disable no-undef */
import uploadImageToCloudinary from "../utils/uploadImageToCloudnary.js";
import OTP from "../models/OTP.model.js";
import User from "../models/user.model.js";
import otpGenerator from 'otp-generator';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const sentOtp = async (req, res) => {
    try {
        // Destructure from req.body
        const { email } = req.body;

        // check email in DATABASE
        const isUser = await User.findOne({ email });

        if (isUser) {
            return res.status(401).json({
                success: false,
                message: "User already exists"
            })
        }

        // Generate OTP
        var otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false
        })

        console.log("OTP ", otp)
        const result = await OTP.findOne({ otp: otp });

        console.log("Result ", result)

        while (result) {
            otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false
            })
        }

        const optPayload = { email, otp };

        const otpBody = await OTP.create(optPayload);
        console.log(otpBody);

        res.status(200).json({
            success: true,
            message: "OTP sent successfully",
            otp: otp
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            error: 'Error While Sending OTP'
        })
    }
}


// Register API

export const register = async (req, res) => {
    try {
        const { name, email, password, confirmPassword, otp } = req.body;
        const imageUrl = req.files.imageUrl;

        // console.log(name, email, password, confirmPassword, otp)
        const image = await uploadImageToCloudinary(imageUrl, 'harsh', 1000, 1000);

        // console.log(image)
        // console.log('check 1')

        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the fields",
            })
        }
        // console.log('check 2')

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Passwords do not match",
            })
        }

        // console.log('check 3')
        // check email present in database
        const existuser = await User.findOne({ email });
        if (existuser) {
            return res.status(400).json({
                success: false,
                message: "Email already exists, Login to continue",
            })
        }

        // console.log('check 4')
        const response = await OTP.findOne({ email });

        // console.log('check 5')
        console.log(response)

        if (otp !== response.otp) {
            return res.status(400).json({
                success: false,
                message: "Invalid OTP",
            })
        }

        // console.log('check 6')
        const hashPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashPassword,
            imageUrl: image.secure_url
        })

        return res.status(200).json({
            success: true,
            message: "User Registered Successfully",
            user
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}


// Login controllers
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // check field 
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields",
            })
        }

        // find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User is not Registered with Us Please Register to Continue",
            })
        }

        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_KEY, { expiresIn: '24h' })

            user.password = undefined;

            const options = {
                expires: new Date(Date.now() + 24 * 60 * 60 * 100),
                httpOnly: true,
                secure: true
            }
            res.cookie("token", token, options).status(200).json({
                success: true,
                message: "User logged in Successfully",
                token,
                user
            })

        } else {
            return res.status(400).json({
                success: false,
                message: "Invalid Password",
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}