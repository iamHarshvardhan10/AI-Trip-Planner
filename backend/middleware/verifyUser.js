/* eslint-disable no-undef */
import jwt from 'jsonwebtoken';


export const verifyUser = async (req, res , next) => {
    try {

        const token = req.cookies?.token || req.body?.token || req.header('Authorization')?.replace("Bearer ", "");

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_KEY);
            req.user = decoded;

        } catch (error) {
            return res.status(401).json({
                message: "Invalid token",
                error: error.message
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            message: 'Error verifying user',
            error: error.message,
            success: false
        })
    }
}