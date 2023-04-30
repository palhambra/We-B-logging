const { User } = require('../models');
    const userData = [
        {
            username: 'Ahri',
            email: 'ahri@hotmail.com',
            password: 'abc123',
        },
        {
            username: 'Paolo',
            email: 'paolo@aol.com',
            password: 'xyz789',
        },
        {
            username: 'Lily',
            email: 'lily@gmail.com',
            password: 'hij456',
        },
    ];
const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;