import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"

dotenv.config();
const app=express();
const port =process.env.port||3001;
const databaseURL=process.env.DATABASE_URL;

const server=app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`)
})

mongoose.connect(databaseURL)
  .then(() => console.log('DB connection successful'))
  .catch((err) => console.error('DB connection error:', err));