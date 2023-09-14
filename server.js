// Importing Express
const express = require('express');


// Importing our database connection
const sequelize = require('./config/connection');

// Importing the routes module
const petRoutes = require('./routes/petRoutes');
const userRoutes = require('./routes/userRoutes');



//  Setting up the Express instance
const app = express();

const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting up the routes
app.use('/api/pets', petRoutes);
app.use('/api/users', userRoutes);


// Syncing our database and logging a message to the user upon success
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
});