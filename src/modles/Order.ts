import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderId: String,
    paymentId: String,
    amount: Number,
    status: String,
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);