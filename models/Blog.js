const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: Datatypes.TEXT,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      references: {
        model: 'user',
        key: 'username'
      }
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    } 
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog'
  }
);

module.exports = Blog;