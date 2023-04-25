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
    user_name: {
      type: DataTypes.STRING,
      references: {
        model: 'user',
        key: 'name'
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