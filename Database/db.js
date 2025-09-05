import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

const mongoURL = process.env.MONGODB_URL
mongoose.connect(mongoURL)

const db = mongoose.connection

db.on('connected',() => {
  console.log("Connected to MongoDB")
})

db.on('error', () => {
  console.log("Error while connecting")
})

db.on('disconnected', () => {
  console.log("Disconnected from MongoDB")
})

export default db