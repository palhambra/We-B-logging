const { Blog } = require ('../models');

const blogData = [
  {
    title: 'C.A.T.',
    content: `C.A.T. stands for "Currently Around Technology". This company uses cats with trackers to see what kind of technology is being use in public areas on a day to day basis`,
    username: 'Paolo',
    created_date: 'January 29, 2020 10:43:32'
  },
  {
    title: 'How PurrfectlyTech is Revolutionizing the Tech Industry with Feline Assistance',
    content: `PurrfectlyTech, a tech company based in San Francisco, has been making waves in the industry thanks to their innovative use of feline assistants. That's right, cats are helping to shape the future of technology!`,
    username: 'Ahri',
    created_date: 'March 16, 2023 10:43:32'
  },
  {
    title: 'PawSolutions',
    content: `PawSolutions, a Seattle-based startup that specializes in pet care services, has a team of therapy cats that work alongside their human employees. These cats, all of whom have been specially trained and certified, roam the office providing comfort and support to anyone who needs it.`,
    username: 'Lily',
    created_date: 'December 4, 2022 07:28:20'
  }
]

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;