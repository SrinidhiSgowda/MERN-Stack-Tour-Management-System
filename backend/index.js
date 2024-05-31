import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/bookings.js';
//db  connection
//mongoose.set("strictQuery",false)  // use if not works

// const connect =async()=>{
//     try{
//         await mongoose.connect(process.env.mongo_uri,{
//             useNewUrlParser:true,
//             useUnifiedTopology:true
//         })
//         console.log("mongo db connected");
//     }
//  catch(err)
// {
//  console.log(err);
//  console.log("db connection failed");
// }
// }
const connect = async () => {
    try {
        await mongoose.connect(process.env.mongo_uri);
        console.log("MongoDB connected");
    } catch (err) {
        console.log(err);
        console.log("DB connection failed");
    }
}

dotenv.config();
const app =express();
const port =process.env.PORT || 8000;
const corsOptions = {
    origin:true,
    Credentials :true
}


app.get('/',(req,res)=>{
    res.send("api is working");
})
// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/auth",authRoute);
app.use("/tours",tourRoute);
app.use("/users",userRoute);
app.use("/review",reviewRoute);
app.use("/booking",bookingRoute);

 app.listen( port,()=>{
    connect()
    console.log("running server",port);  
 })