import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Log when connected
        mongoose.connection.on("connected", () => {
            console.log("DB Connected");
        });

        // Log on connection error
        mongoose.connection.on("error", (err) => {
            console.error("Connection Error:", err);
        });

        // Establish connection
        await mongoose.connect(`${process.env.MONGODB_URI}/ecommerce`);
        console.log("MongoDB connection successful");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err.message);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
