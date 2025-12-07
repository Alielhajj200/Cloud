import  express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
//import the the blog routes
import blogRoutes from "./routes/blogRoutes.js";
dotenv.config();



export const app = express()
app.use(cors());
app.get('/',function(req,res){
    res.send("it worked updated");
})
app.use(express.json()); // for JSON body
app.use(express.urlencoded({ extended: true }));

app.use("/api/blogs", blogRoutes);


const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/myDatabase';

mongoose.connect(mongoURI) // remove options
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));


app.listen(process.env.PORT || 5000 , () => {
    console.log('server running on port 5000')
})
 