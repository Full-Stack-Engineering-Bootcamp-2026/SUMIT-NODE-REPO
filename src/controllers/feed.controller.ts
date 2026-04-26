import { Container } from "typedi";
import { FeedService } from "../service/feed.service.js";
import "reflect-metadata";
import { Request, Response, NextFunction } from "express";

class FeedController {
  private feedService = Container.get(FeedService);
  async getPosts(req: Request, res: Response, next: NextFunction) {
    try {
      const posts = await this.feedService.getPosts();
      res.status(200).json({
        message: "Fetched successfully",
        posts,
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        next(err);
      } else {
        next(new Error(" error occurred"));
      }
    }
  }
  async getPost(
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const id = req.params.id;
      const post = await this.feedService.getPostById(id);
    } catch (err: unknown) {
      if (err instanceof Error) {
        next(err);
      } else {
        next(new Error("error occurred"));
      }
    }
  }

  async createPost(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, imageUrl, content, creator } = req.body;
      const post = await this.feedService.createPost(
        title,
        imageUrl,
        content,
        creator,
      );
      res.status(201).json({
        message: "Post created",
        post,
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        next(err);
      } else {
        next(new Error(" error occurred"));
      }
    }
  }
}

export default FeedController;
