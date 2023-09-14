// Importing the necessary objects from Sequelize and our database connection
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the User model
const User = sequelize.define('User', {
  /* Each User has three fields: name, phone number, and address. All are required.
  * 'allowNull: false' ensures that a user cannot be created without these fields. */
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User; // Exporting the User model for use in our routes and database actions