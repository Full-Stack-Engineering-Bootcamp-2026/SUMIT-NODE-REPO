
import express, { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { UserController } from "../controllers/user.controller.js";

const router = express.Router();
const controller = new UserController();

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const validate = (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(422).json({
      message: error.details[0].message,
    });
  }

  next();
};

router.post("/signup", validate, controller.signup.bind(controller));
router.post("/login", controller.login.bind(controller));
// router.get("/posts", isAuth, controller.getPosts.bind(controller));

export default router;