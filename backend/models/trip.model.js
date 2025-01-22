import mongoose from "mongoose";


const tripSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    tripName: {
        type: String,
    },
    destinations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Destination'
        }
    ],
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    budget: {
        type: Number,
    },
    tripDescription: {
        type: String,
    }
})

const Trip = mongoose.model('Trip', tripSchema);

export default Trip;