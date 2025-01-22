import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    place: {
        type: String,
    },
    descripation: {
        type: String
    },
    activities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Activity'
    }],
    image: {
        type: String
    },
    bestTimeToVisit: {
        type: String
    },
    avgCostPerDay: {
        type: Number
    }
})

const Destination = mongoose.model('Destination', destinationSchema);

export default Destination;