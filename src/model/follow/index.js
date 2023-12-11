import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";
import UserModel from "../user/index.js";

const followerModel = sequelize.define("follow", {});

UserModel.belongsToMany(UserModel, {
  through: followerModel,
  as: "followers",
  foreignKey: "followerUserId",
});
UserModel.belongsToMany(UserModel, {
  through: followerModel,
  as: "following",
  foreignKey: "followingUserId",
});

export default followerModel;
