import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';

// app config
const app = express();
const port = process.env.PORT || 4000
connectDB()
connectCloudinary();

//middlewares
app.use(express.json())
app.use(cors())

//API end points
app.get('/', (req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>console.log('Server started on port :'+port))