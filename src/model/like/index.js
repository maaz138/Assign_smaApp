import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";
import UserModel from "../user/index.js";
import postModel from "../post/index.js";
 
const likeModel = sequelize.define("like",{
    createdAt:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
    },
});
UserModel.hasMany(likeModel);
likeModel.belongsTo(UserModel);
postModel.hasMany(likeModel);
likeModel.belongsTo(postModel);

export default likeModel;