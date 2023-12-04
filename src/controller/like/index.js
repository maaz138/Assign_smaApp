import likeModel from "../../model/like/index.js";
import postModel from "../../model/post/index.js";
const likeController = {
  likePost: async (req, res) => {
    try {
      const { userId, postId } = req.body;
      const post = await postModel.findByPk(postId);
      if (!post) {
        return res.status(400).json({ message: "post not found" });
      }
      post.likeCount += 1;
      await post.save();
      await likeModel.create({ userId, postId });

      return res.status(500).json({ message: "Post Liked Succrssfully" });
    } catch (error) {
      return res.status(400).json({ message: "bad request" });
    }
  },

  getAllLikes: async (req, res) => {
    try {
      const post = await likeModel.findAll();
      return res.status(200).json(post);
    } catch (error) {
      return res.status(400).json({ message: "bad request" });
    }
  },
  unlikePost: async (req, res) => {
    try {
      const { userId, postId } = req.body;
      const post = await postModel.findByPk(postId);
      if (!post) {
        return res.status(400).json({ message: "post not found" });
      }
      post.likeCount -= 1;
      await post.save();
      await likeModel.destroy({
        where: { userId, postId },
      });

      return res.status(500).json({ message: "Post unliked" });
    } catch (error) {
      return res.status(400).json({ message: "bad request" });
    }
  },
};

export default likeController;
