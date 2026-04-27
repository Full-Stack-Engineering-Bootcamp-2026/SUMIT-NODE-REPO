import express, { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { Container } from "typedi";
import FeedController from "../controllers/feed.controller.js";

const postSchema = Joi.object({
  title: Joi.string().min(7).required(),
  imageUrl: Joi.string().min(3).required(),
  content: Joi.string().min(5).required(),
  creator: Joi.string().min(2).required(),
});

const router = express.Router();
const controller = Container.get(FeedController);

const validatePost = (req: Request, res: Response, next: NextFunction) => {
  const { error } = postSchema.validate(req.body);
  if (error) {
    return res.status(422).json({
      message: "Validation error",
      error: error.details[0].message,
    });
  }
  next();
};

router.get("/posts", controller.getPosts.bind(controller));
router.post("/posts", validatePost, controller.createPost.bind(controller));
router.get("/posts/:postId", controller.getPost.bind(controller));

export default router;