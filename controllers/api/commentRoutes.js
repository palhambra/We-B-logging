const router = require('express').Router();
const { Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Post comment
router.post('/', withAuth, async (req, res) => {
  try {
  const commentData = await Comment.create({
    blog_id: req.body.blog_id,
    content: req.body.content,
    username: req.session.username,
    date_created: new Date()
  });
  res.redirect(`/blog/${req.body.blog_id}`);
  // res.status(200).json(newBlog);
} catch (err) {
  res.status(500).json(err)
}
});

// Delete comment
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        username: req.session.username
      }
    })
    if (!commentData) {
      res.status(404).json({ message: 'No comment found!'});
      return
    }
    
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err)
  }
});

// Get all comments
router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll();
  
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err)
  }
  
  });
module.exports = router;