import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";
import UserModel from "../user/index.js";

const postModel = sequelize.define("post",{
    content:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    likeCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },

})
UserModel.hasMany(postModel);
postModel.belongsTo(UserModel);

export default postModel;