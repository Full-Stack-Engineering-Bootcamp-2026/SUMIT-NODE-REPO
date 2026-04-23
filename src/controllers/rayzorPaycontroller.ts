import type { Request, Response } from "express";
import { razorpay } from "../config/rayzorpay.js";
import { createHmac } from "node:crypto";
import { Order } from "../modles/Order.js";

// Create Order
export const createOrder = async (req: Request, res: Response) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({ message: "Amount required" });
    }

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    res.json(order);
  } catch (err) {
    res.status(500).json({ error: "Order creation failed" });
  }
};


export const verifyPayment = async (req: Request, res: Response) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, amount } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = createHmac("sha256", process.env.RAZORPAY_KEY_SECRET as string)
      .update(body)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
  
      await Order.create({
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        amount,
        status: "success",
      });

      return res.json({ success: true });
    } else {
      return res.status(400).json({ success: false });
    }
  } catch (err) {
    res.status(500).json({ error: "Verification failed" });
  }
};