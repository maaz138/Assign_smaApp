import userController from "../../controller/user/index.js";
import { Router } from "express";
const userRouter= Router();
userRouter.post("/user",userController.createUser);
userRouter.get("/user",userController.getUser);
userRouter.delete("/user/:userId",userController.deleteUser);

export default userRouter;