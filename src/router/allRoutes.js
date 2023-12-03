import { Router } from "express";
import userRouter from "./user/index.js";
import postRouter from "./post/index.js";
const allRoutes = Router();
allRoutes.use("/",userRouter);
allRoutes.use("/",postRouter);

export default allRoutes;