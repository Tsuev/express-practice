import sequelize  from "../db.js";
import { DataTypes } from "sequelize";
import Post from './Post.js'

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE(6),
    allowNull: true,
  }
})

User.hasMany(Post, { as: 'posts' });

export default User