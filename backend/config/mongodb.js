import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log("DB Connected");
        });

        mongoose.connection.on('error', (err) => {
            console.error("Connection Error:", err);
        });

        await mongoose.connect(`${process.env.MONGODB_URI}/ecommerce`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB connection successful");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err.message);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
