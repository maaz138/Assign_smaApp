import { Router } from "express";
import likeController from "../../controller/like/index.js";
const likeRouter = Router();
likeRouter.post("/like", likeController.likePost);
likeRouter.get("/like", likeController.getAllLikes);
likeRouter.post("/unlike", likeController.unlikePost);

export default likeRouter;
