import mongoose from "mongoose";

const dbConnect = async () => {
    await mongoose.connect('mongodb://localhost:27017/ai-trip-planner')
        .then(() => {
            console.log('Mongodb connected')
        })
        .catch((error) => {
            console.log(error.message)
        })
}

export default dbConnect;
