import sequelize  from "../db";
import { DataTypes } from "sequelize";

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE(6),
    allowNull: true
  }
})

User.create({
  username: 'Mansur'
})