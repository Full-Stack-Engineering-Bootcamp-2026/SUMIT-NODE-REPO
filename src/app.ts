import express from "express";
import paymentRoutes from "./routes/rayzorpayRoute.js";

const app = express();

app.use(express.json());

app.use("/api/payment", paymentRoutes);

export default app;