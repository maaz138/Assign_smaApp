import { Router } from "express";
import followerController from "../../controller/follow/index.js";
import userValidator from "../../validators/users/index.js";
const followerRouter = Router();

followerRouter.post(
  "/followUser",
  userValidator.validateUser,
  followerController.create
);
followerRouter.get("/followers", followerController.getFollowersForUser);
followerRouter.get("/following", followerController.getFollowingForUser);
followerRouter.post("/unfollowUser", followerController.unfollowUser);

export default followerRouter;
