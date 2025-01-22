import mongoose from "mongoose";


const activitySchema = new mongoose.Schema({
    name: {
        type: String
    },
    location: {
        type: String
    },
    category: {
        type: String
    },
    cost: {
        type: Number
    },
    duration: {
        type: String
    },
    description: {
        type: String
    }
})


const Activity = mongoose.model('Activity', activitySchema);

export default Activity;