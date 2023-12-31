import { Router } from "express";
import commentController from "../../controller/comment/index.js";
const commentRouter = Router();
commentRouter.post("/comment", commentController.createComment);
commentRouter.get("/comment", commentController.getAllComments);

export default commentRouter;
