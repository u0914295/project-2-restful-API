// Importing the Sequelize constructor
const Sequelize = require('sequelize');

// Importing dotenv to read the environment variables from '.env' file
require('dotenv').config();

// Creating a new Sequelize connection using the environment variables from .env
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PW, {
    host: process.env.DATABASE_URL,
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize; // Exporting the sequelize connection