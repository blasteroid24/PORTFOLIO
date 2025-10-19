import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    if (isConnected) return;

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "bestornothing",
        });
        isConnected = true;
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error);
    }
};
