import 'dotenv/config';
import express from "express";
import type { Request, Response } from "express";
import multer from "multer";
import path from "path";
import productRouter from "./routes/productRoute.js";
import { User } from "./modules/user.js";
import { Order } from "./modules/order.js";
import { Product } from "./modules/product.js";
import mongoose from "mongoose";
import { log } from "node:console";

const MONGODB_URI = process.env.MONGO_ATLAS_CONNECTION_URI || 'mongodb://localhost:27017/practice';
console.log('MONGODB_URI:', MONGODB_URI);

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/images", express.static("images"));

app.use("/", productRouter);

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(port);
    console.log("MongoDB connected successfully");
    console.log(`Server started at ${port}`);
  })
  .catch((err) => {
    console.log(err);
  });