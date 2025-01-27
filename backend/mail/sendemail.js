/* eslint-disable no-undef */
import nodemailer from 'nodemailer'


const sendMail = async (email, title, body) => {

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        })

        const info = await transporter.sendMail({
            from: `${process.env.EMAIL_USER}`,
            to: `${email}`,
            subject: `${title}`,
            text: `${body}`
        })
        console.log('message sent', info)
    } catch (error) {
        console.log(error.message)
    }
}

export default sendMail;