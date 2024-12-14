import {v2 as cloudinary} from "cloudinary"

const connectCloudinary = async() => {
    cloudinary.config({
        cloud_name: process.env.CLOUDANARY_NAME,
        api_key: process.env.CLOUDANARY_API_KEY,
        api_secret: process.env.CLOUDANARY_SECRET_KEY
    })
}

export default connectCloudinary;