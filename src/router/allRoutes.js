import { Router } from "express";
import userRouter from "./user/index.js";
import postRouter from "./post/index.js";
import likeRouter from "./like/index.js";
const allRoutes = Router();
allRoutes.use("/", userRouter);
allRoutes.use("/", postRouter);
allRoutes.use("/", likeRouter);

export default allRoutes;
