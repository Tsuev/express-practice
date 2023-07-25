import sequelize  from "../db.js";
import { DataTypes } from "sequelize";

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  post: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE(6),
    allowNull: true
  }
})

export default Post