import { Router } from "express";
import userRouter from "./user/index.js";
import postRouter from "./post/index.js";
import likeRouter from "./like/index.js";
import commentRouter from "./comment/index.js";
import followerRouter from "./follow/index.js";
const allRoutes = Router();
allRoutes.use("/", userRouter);
allRoutes.use("/", postRouter);
allRoutes.use("/", likeRouter);
allRoutes.use("/", commentRouter);
allRoutes.use("/", followerRouter);

export default allRoutes;
