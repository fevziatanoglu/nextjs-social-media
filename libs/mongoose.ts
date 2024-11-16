import mongoose from "mongoose";

let isConnectedDB = false;

export default async function connectToDB() {
  if (!process.env.MONGODB_URL) return console.log("DB URL NOT FOUND");
  if (isConnectedDB) return console.log("Already connected to MongoDB");
  try {
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (err) {
    console.log(err);
  }
}
