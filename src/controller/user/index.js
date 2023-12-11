import UserModel from "../../model/user/index.js";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
const userController = {
  createUser: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const hashedPassword = await hash(password, 10);
      const user = await UserModel.create({
        name,
        email,
        password: hashedPassword,
      });
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ message: "bad user request" });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await UserModel.findOne({ where: { email } });
      if (!user) {
        return res
          .status(400)
          .json({ message: `user with this ${email} do not exist` });
      }
      const comparePassword = await compare(password, user.password);
      if (!comparePassword) {
        return res.status(400).json({ message: `Invalid Password` });
      }
      const data = {
        id: user.id,
        email: user.email,
      };
      const token = jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: "14d",
      });
      req.session.token = token;
      req.session.user = data;
      await req.session.save();
      return res.status(200).json({ message: "Login successfully", token });
    } catch (error) {
      return res.status(500).json({ message: "bad request" });
    }
  },

  getUser: async (req, res) => {
    try {
      const user = await UserModel.findAll();
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: "bad request" });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await UserModel.destroy({
        where: { id: req.params.userId },
      });
      return res.status(200).json({ message: "user deleted successfully" });
    } catch (error) {
      return res.status(400).json({ message: "bad request" });
    }
  },
  updateUser: async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await UserModel.findByPk(userId);
      if (user) {
        const updatedUser = await user.update(req.body);
        return res.status(200).json({ updatedUser });
      } else {
        return res.status(400).json({ message: "no such user found" });
      }
    } catch (error) {
      return res.status(400).json({ message: "bad request" });
    }
  },
};

export default userController;
