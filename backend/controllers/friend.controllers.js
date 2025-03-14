import User from "../models/user.model.js";


export const getConnection = async (req, res) => {
    try {
        const userId = req.user.id;
        if (!userId) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const currentUser = await User.findById(userId);

        const excludedUser = [
            userId,
            ...currentUser.friends,
            ...currentUser.pendingRequests,
            ...currentUser.sendRequests

        ]

        const users = await User.find({
            _id: { $nin: excludedUser }
        }).select('name email imageUrl')

        res.status(200).json({
            success: true,
            users,
            message: 'Connection Fetch Successfully'
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Error fetching friends',
            error: error.message
        })
    }
}