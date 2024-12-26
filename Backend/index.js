// const express=require('express')
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors'
import bookRoute from "./Routes/book.route.js"
import userRoute from "./Routes/user.route.js"

dotenv.config();

const PORT = process.env.PORT || 5000;
const URI =process.env.mongoDBURI

const app = express();
 app.use(cors())
 app.use(express.json())

// <==== connect to database ====>
    try {
        mongoose.connect(URI).then(()=>{
            console.log('connected to database');
            
        })
    } catch (error) {
        console.log(error);
        
    }




app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`port is listning at ${PORT}`);
});
