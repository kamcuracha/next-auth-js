import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(String(process.env.MONGO_URI))
    return conn;
  } catch (error) {
    throw new Error(error);
  }
}

export { dbConnect };