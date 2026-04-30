import { Service } from "typedi";
import Post from "../models/post.models.js";

@Service()
export class FeedService {
  async getPosts() {
    return await Post.find();
  }

  async createPost(
    title: string,
    imageUrl: string,
    content: string,
    creator: string,
  ) {
    const post = new Post({
      title,
      imageUrl,
      content,
      creator,
    });
    return await post.save();
  }

  async getPostById(id: string) {
    const post = await Post.findById(id);
    if (!post) {
      const error: any = new Error("Not found");
      error.statusCode = 404;
      throw error;
    }
    return post;
  }
}
