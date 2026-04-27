import { Container } from "typedi";
import { FeedService } from "../service/feed.service.js";
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
    } catch (err) {
      next(err);
    }
  }

  async getPost(
    req: Request<{ postId: string }>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const id = req.params.postId;
      const post = await this.feedService.getPostById(id);
      res.status(200).json({
        message: "Post fetched",
        post,
      });
    } catch (err) {
      next(err);
    }
  }

  async createPost(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, imageUrl, content, creator } = req.body;
      const post = await this.feedService.createPost(
        title,
        imageUrl,
        content,
        creator
      );
      res.status(201).json({
        message: "Post created",
        post,
      });
    } catch (err) {
      next(err);
    }
  }
}

export default FeedController;