import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import "reflect-metadata";
import feedRoutes from "./routes/feed.route.js";
import userRoutes from "./routes/user.route.js";

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("images"));


app.use("/auth", userRoutes);
app.use("/feed", feedRoutes);


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

export default app;