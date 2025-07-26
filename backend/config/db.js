import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ DB CONNECTED");
  } catch (error) {
    console.error("❌ DB CONNECTION FAILED:", error.message);
    process.exit(1); // Exit on failure
  }
};
