// Importing the necessary objects from Sequelize and our database connection

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');

// Define the Pet model
const Pet = sequelize.define('Pet', {
  /* Each Pet has three required fields (name, type, and age) and two optional fields (adopted and ownerId).
   * The 'adopted' field defaults to false.
   *  The 'ownerId' field is explained below.*/
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  adopted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  /* The ownerId field establishes a one-to-many relationship between Pets and Users. 
  *  It references the 'id' field from a User. This is how we know which user has adopted a pet.
  *  When we query a Pet, the ownerId will correspond to a User's id. */
  ownerId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
});

module.exports = Pet; //Exporting the Pet model for use in our routes and database actions