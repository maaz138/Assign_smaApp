import commentModel from "../../model/comment/index.js";
const commentController = {
  createComment: async (req, res) => {
    try {
      const { postId, userId, commentContent } = req.body;
      const comments = await commentModel.create({
        postId,
        userId,
        commentContent,
      });
      return res.status(200).json(comments);
    } catch (error) {
      return res.status(400).json({ message: "bad request" });
    }
  },
  getAllComments: async (req, res) => {
    try {
      const comments = await commentModel.findAll();
      return res.status(200).json(comments);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "bad request" });
    }
  },
  // deleteComment: async(req,res)=>{
  //     try {
  //         const { userId, postId } = req.body;
  //         const comments = await commentModel.destroy({
  //             where:{id:req.params.postId}
  //         })
  //         return res.status(200).json({message:"Post deleted successfully"})
  //     }
  //     catch (error) {
  //         return res.status(500).json({message:"bad request"})
  //     }
  // }
};

export default commentController;
