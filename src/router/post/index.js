import { Router } from "express";
import postController from "../../controller/post/index.js";
import PostValidator from "../../validators/post/index.js";
import Authenticate from "../../middleware/authenticte.js";
const postRouter = Router();
postRouter.post(
  "/post",
  Authenticate,
  PostValidator.validatePost,
  postController.createPost
);
postRouter.get("/post", postController.getAllPosts);
postRouter.delete("/post/:postId", postController.deletePost);

export default postRouter;
