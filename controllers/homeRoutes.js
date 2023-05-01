const router = require('express').Router();
const { Blog, Comment } = require('../models');
// const withAuth = require('../utils/auth');

// Blogs for homepage
router.get('/', async (req, res) => {
try {
  const blogData = await Blog.findAll();

  const blogs = blogData.map((blog) => blog.get({ plain:true }));

  res.render('homepage', {
    blogs,
    loggedIn: req.session.logged_in,
    username: req.session.username
  });
} catch (err) {
  res.status(500).json(err)
}

});

// Individual blogs
router.get('/blog/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [{model: Comment}]
    });
    if(!blogData) {
      res.status(404).json({ message: 'No blog found' });
      return;
    }
    const blogs = blogData.get({ plain:true });
    res.render('blog', { 
      blogs,
    loggedIn: req.session.logged_in,
    username: req.session.username });
  } catch (err) {
    res.status(500).json(err);
  }
})

// Login page
router.get('/login', (req, res) => {
 
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

// Dashboard page
router.get('/dashboard', async (req, res) => {
  console.log(req.session)
  if (!req.session.logged_in) {
    res.render('login');
    return;
  }
  if (req.session.logged_in) {
  try {
    const blogData = await Blog.findAll({
      where: {
        username: req.session.username
      }
    });
  
    const blogs = blogData.map((blog) => blog.get({ plain:true }));
  console.log(blogs)
    res.render('dashboard', {
      blogs,
      loggedIn: req.session.logged_in,
      username: req.session.username
    });
  }catch (err) {
    res.status(500).json(err)
  }
}
});

module.exports = router;