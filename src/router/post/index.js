import { Router } from "express";
import postController from "../../controller/post/index.js";
const postRouter = Router();
postRouter.post("/post",postController.createPost);
postRouter.get("/post",postController.getAllPosts);
postRouter.delete("/post/:postId",postController.deletePost);


export default postRouter;