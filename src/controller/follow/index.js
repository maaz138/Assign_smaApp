import followerModel from "../../model/follow/index.js";
import UserModel from "../../model/user/index.js";
const followerController = {
  create: async (req, res) => {
    try {
      const { followerUserId, followingUserId } = req.body;
      const follow = await followerModel.create({
        followerUserId,
        followingUserId,
      });
      return res.status(200).json({ follow });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "bad request" });
    }
  },

  getFollowersForUser: async (req, res) => {
    try {
      const user = await UserModel.findAll({
        include: [
          {
            model: UserModel,
            as: "followers",
          },
        ],
      });
      if (!user) {
        return res.status(404).json({ message: "user not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "bad request" });
    }
  },

  getFollowingForUser: async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await UserModel.findByPk(userId, {
        include: [
          {
            model: UserModel,
            as: "following",
          },
        ],
      });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: "bad request" });
    }
  },

  unfollowUser: async (req, res) => {
    try {
      const { followerUserId, followingUserId } = req.body;
      const result = await followerModel.destroy({
        where: { followerUserId, followingUserId },
      });
      return res.status(200).json({ message: "unfollowed successfully" });
    } catch (error) {
      return res.status(500).json({ message: "bad request" });
    }
  },
};

export default followerController;
