import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";
const UserModel = sequelize.define("user",{
    name:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false,
    },
});

export default UserModel;