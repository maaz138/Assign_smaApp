import followerModel from "../../model/follow/index.js";
import UserModel from "../../model/user/index.js";
const followerController = {
  create: async (req, res) => {
    try {
      const follow = await followerModel.create(
        req.body.userId,
        req.body.userId
      );
      return res.status(200).json({ follow });
    } catch (error) {
      res.status(500).json({ message: "bad request" });
    }
  },
};

export default followerController;
