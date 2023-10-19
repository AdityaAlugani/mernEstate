import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const app=express();

mongoose.connect("mongodb+srv://marvelsuniverse1967:Ngit%40123%24@mern-estate.02f7f0i.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connected to mongodb server");
}).catch((error)=>console.log(error.message));

app.listen(3001,()=>{
    console.log("Server is running at port 3001!");
});