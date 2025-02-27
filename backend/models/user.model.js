import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    imageUrl: {
        type: String,
        default: `https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png`
    },
    role: {
        type: String,
        enum: ['User', 'Admin'],
        default: 'User'
    },
    trips: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trip'
    }]
}, { timestamps: true })

const User = mongoose.model('User', userSchema);

export default User;