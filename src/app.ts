import express, { Request, Response, NextFunction } from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import "reflect-metadata";
import feedRoutes from "./routes/feed.route.js";

const MONGODB_URI =
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.bqfim3v.mongodb.net/?appName=Cluster0` as string;

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("images"));

app.use("/feed", feedRoutes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

const startServer = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    app.listen(port);
  } catch (err) {
    console.error(err);
  }
};

startServer();
