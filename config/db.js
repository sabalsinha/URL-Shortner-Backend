import mongoose from "mongoose";


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Db connected succesfully')
    } catch (error) {
        console.error('Error while connecting db', error);
    }
}

export default connectDB;