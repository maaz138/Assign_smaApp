import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";
import UserModel from "../user/index.js";
import postModel from "../post/index.js";
const commentModel = sequelize.define("comment", {
  commentContent: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

UserModel.hasMany(commentModel);
commentModel.belongsTo(UserModel);

postModel.hasMany(commentModel);
commentModel.belongsTo(postModel);

export default commentModel;
