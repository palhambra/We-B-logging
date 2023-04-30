const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

User.hasMany(Blog, {
  foreignKey: 'username',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'username'
});

User.hasMany(Comment, {
  foreignKey: 'username',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'username'
});

Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Blog, {
  foreignKey: 'blog_id'
});

