import mongoose from "mongoose";

let isConnectedDB = false;

export default async function connectToDB() {
  if (!process.env.MONGODB_URL) return console.log("DB URL NOT FOUND");
  if (isConnectedDB) return console.log("Already connected to MongoDB");
  console.log(process.env.MONGODB_URL)
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
    
  } catch (err) {
    console.log(err);
  }
}
