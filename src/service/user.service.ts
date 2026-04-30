import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"; 
import User from "../models/user.model.js"

export class UserService {

  async signup(email: string, password: string) {
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      const error: any = new Error("User already exists")
      error.statusCode = 422
      throw error
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = new User({ email, password: hashedPassword })
    return user.save()
  }

  async login(email: string, password: string) {
    const user = await User.findOne({ email })

    if (!user) {
      throw new Error("User not found")
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      throw new Error("Invalid credentials")
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    )

    return { token, userId: user._id }
  }
}