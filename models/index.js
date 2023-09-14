// Import the User model from the User.js file in the models directory
const User = require('./User');

// Import the Pet model from the Pet.js file in the models directory
const Pet = require('./Pet');

// Export an object containing the User and Pet models. This allows the server to access both models using require('models')
module.exports = { User, Pet };