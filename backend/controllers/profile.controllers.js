/* eslint-disable no-undef */
import User from "../models/user.model.js";
import uploadImageToCloudinary from "../utils/uploadImageToCloudnary.js";


export const updatePicture = async (req, res) => {
    try {
        const displayPicture = req.files.displayPicture;
        const userId = req.user.id;

        const image = await uploadImageToCloudinary(
            displayPicture,
            process.env.FOLDER_NAME,
            1000,
            1000

        )

        const uploadProfile = await User.findByIdAndUpdate(
            { _id: userId },
            { imageUrl: image.secure_url },
            { new: true }
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