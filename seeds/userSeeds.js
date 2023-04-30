const { User } = require('../models');
    const userData = [
        {
            name: 'Ahri',
            email: 'ahri@hotmail.com',
            password: 'abc123',
        },
        {
            name: 'Paolo',
            email: 'paolo@aol.com',
            password: 'xyz789',
        },
        {
            name: 'Lily',
            email: 'lily@gmail.com',
            password: 'hij456',
        },
    ];
const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;