import postModel from "../../model/post/index.js";
const postController= {
    createPost:async(req,res)=>{
        try {
            const{content,userId}=req.body;
            const post = await postModel.create({
                userId,
                content,
            })
            return res.status(200).json(post);
        } catch (error) {
            return res.status(400).json({message:"bad request"})
        }
    },
    getAllPosts: async(req,res)=>{
        try {
            const post = await postModel.findAll();
            return res.status(200).json(post);
        } catch (error) {
            return res.status(500).json({message:"bad request"});
            
        }
    },
    deletePost: async(req,res)=>{
        try {
            const post = await postModel.destroy({
                where:{id:req.params.postId}
            })   
            return res.status(200).json({message:"Post deleted successfully"})
        }
        catch (error) {
            return res.status(500).json({message:"bad request"})
        }
    }
}

export default postController;