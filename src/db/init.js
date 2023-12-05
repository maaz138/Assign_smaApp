import commentModel from "../model/comment/index.js";
import likeModel from "../model/like/index.js";
import postModel from "../model/post/index.js";
import UserModel from "../model/user/index.js";

const dbinit = async () => {
  await UserModel.sync({
    alter: true,
    force: false,
  });
  await postModel.sync({
    alter: true,
    force: false,
  });
  await likeModel.sync({
    alter: true,
    force: false,
  });
  await commentModel.sync({
    alter: true,
    force: false,
  });
};

export default dbinit;
