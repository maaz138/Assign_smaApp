import userController from "../../controller/user/index.js";
import Authenticate from "../../middleware/authenticte.js";
import { Router } from "express";
const userRouter = Router();
userRouter.post("/user", userController.createUser);
userRouter.post("/login", userController.login);
userRouter.get("/user", userController.getUser);
userRouter.delete("/user/:userId", userController.deleteUser);
userRouter.put("/user/:userId", userController.updateUser);

export default userRouter;
