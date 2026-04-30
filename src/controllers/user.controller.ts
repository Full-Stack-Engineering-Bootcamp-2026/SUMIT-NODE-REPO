import { Request, Response, NextFunction } from "express";
import { UserService } from "../service/user.service.js";

export class UserController {
  private userService = new UserService();

  // 🔹 Signup
  async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      const user = await this.userService.signup(email, password);

      res.status(201).json({
        message: "User created",
        userId: user._id.toString(),
      });
    } catch (err) {
      next(err);
    }
  }

  // 🔹 Login
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: "Email and password required" });
      }

      const data = await this.userService.login(email, password);

      res.status(200).json({
        message: "Login successful",
        token: data.token,
        userId: data.userId.toString(),
      });
    } catch (err) {
      next(err);
    }
  }
}