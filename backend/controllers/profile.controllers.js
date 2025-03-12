/* eslint-disable no-undef */
import User from "../models/user.model.js";
import uploadImageToCloudinary from "../utils/uploadImageToCloudnary.js";


export const updatePicture = async (req, res) => {
    try {

        console.log("Files Received:", req.files); // Debugging step
        console.log("Request Body:", req.body);

        
        if (!req.files || !req.files.displayPicture) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded",
            });
        }

        const displayPicture = req.files.displayPicture;
        const userId = req.user.id;

        console.log("Uploaded file:", displayPicture);


        console.log("it req fiel ", req.files)
        const image = await uploadImageToCloudinary(
            displayPicture,
            process.env.FOLDER_NAME,
            1000,
            1000

        )

        const uploadProfile = await User.findByIdAndUpdate(
            { _id: userId },
            { imageUrl: image.secure_url }, { new: true }
        )

        res.send({
            success: true,
            message: 'Image Updated Successfully',
            data: uploadProfile

        })
    } catch (error) {
        return res.status(500).json({
            message: "Error updating picture",
            error: error.message
        })
    }
}