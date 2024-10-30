import express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from 'cookie-parser';
import UserRouter from "./routes/userRoute.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser()); // Make sure to add this line
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));
const port = process.env.PORT || 9090;
const MongodbURI = process.env.mongodb_URI;
try 
{
  mongoose.connect(MongodbURI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error", err))
}catch(err)
{
 console.log("connetion error",err);
}

app.get("/", (req, res) => {
  res.send("welcome to root page:");
});

app.use("/user",UserRouter);

app.listen(port, () => {
  console.log(`server is running at port:localhost:${port}`);
});
