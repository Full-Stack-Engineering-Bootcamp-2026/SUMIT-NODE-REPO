import "dotenv/config";
import mongoose from "mongoose";
import app from "./src/app.js";

const port = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI as string;

const startServer = async () => {
  try {
    if (!MONGO_URI) {
      throw new Error("MONGO_URI missing");
    }

    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

  } catch (err: any) {
    console.error("ERROR ", err.message || err);
    process.exit(1);
  }
};

startServer();