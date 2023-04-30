const { Comment } = require('../models');

const commentData = [
  {
    username: 'Lily',
    content: `I don't know how I feel about cats tracking my data`,
    blog_id: '1',
    date_created: 'January 31, 2020 06:45:00'
  },
  {
    username: 'Paolo',
    content: `I knew cats were smart! They can do it all`,
    blog_id: '2',
    date_created: 'March 25, 2023 11:35:00'
  },
  {
    username: 'Ahri',
    content: `Sign me up for this company! Being able to work towards helping out animals, and also working alongside them to help relieve some stress, what more could you ask for?`,
    blog_id: '3',
    date_created: 'December 16, 2022 12:54:00'
  }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;