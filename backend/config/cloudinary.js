/* eslint-disable no-undef */
import { v2 as cloudinary } from 'cloudinary';

const cloudinaryConnect = () => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.CLOUD_API_KEY,
            api_secret: process.env.CLOUD_API_SECRET
        })

        // console.log('cloudinary setup confirm')
    } catch (error) {
        console.log(error.message)
    }
}

export default cloudinaryConnect;