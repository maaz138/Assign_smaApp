import UserModel from "../../model/user/index.js";
const userController ={
    createUser: async(req,res)=>{
        try {
            const{name,email,password}= req.body;
            const user = await UserModel.create({
                name,
                email,
                password
            })
            return res.status(201).json(user);
        } catch (error) {
            return res.status(400).json({message:"bad user request"})
        }
    },
    getUser: async(req,res)=>{
        try {
            const user = await UserModel.findAll();
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({message:"bad request"});
            
        }
    },
    deleteUser: async(req,res)=>{
        try {
            const user = await UserModel.destroy({
                where:{id:req.params.userId}
                
            });
            return res.status(200).json({message: "user deleted successfully"});
        } catch (error) {
            return res.status(400).json({message:"bad request"});
            
        }
    }
}

export default userController;