const seedBlog = require('./blogSeeds');
const seedComment = require('./commentSeeds');
const seedUsers = require('./userSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedUsers();
    console.log('\n----- USERS SYNCED -----\n');

    await seedBlog();
    console.log('\n----- CATEGORIES SYNCED -----\n');
    
    await seedComment();
    console.log('\n----- INSTRUMENTS SYNCED -----\n');

    process.exit(0);
};

seedAll();