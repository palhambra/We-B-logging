const router = require('express').Router();
const { Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Create new blog
router.post('/', withAuth, async (req, res) => {
  try {
  const newBlog = await Blog.create({
    title: req.body.title,
    content: req.body.content,
    username: req.session.username,
    date_created: new Date()
  });
  res.redirect('/dashboard');
  // res.status(200).json(newBlog);
} catch (err) {
  res.status(500).json(err)
}
});

// Delete blog
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        username: req.session.username
      }
    })
    if (!blogData) {
      res.status(404).json({ message: 'No blog found!'});
      return
    }
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  try {
    const blogData = await Blog.update({
      
        title: req.body.title,
        content: req.body.content
    },
    {
      where: {
        id: req.params.id,
        // username: req.session.username
      },
    })
    if (!blogData) {
      res.status(404).json({ message: 'No blog found!'});
      return
    }
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err)
  }
});

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll(
      {
        include: [{model: Comment}]
      }
    );
  
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err)
  }
  
  });
module.exports = router;