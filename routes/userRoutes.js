const router = require('express').Router();
const { User, Pet } = require('../models');

// Request to get all users information from the database
router.get('/', async (req, res) => {
    try {
        // Fetch data from User table
        const userData = await User.findAll();
        // Send the user data as a JSON
        res.status(200).json(userData);
    } catch (err) {
        // An error occurred, send an error message
        res.status(500).json(err);
    }
});

// Request to add a new user to the User database
router.post('/', async (req, res) => {
    try {
        // Create a new user row in the User table
        const userData = await User.create(req.body);
        // Send the new user data as a JSON
        res.status(200).json(userData);
    } catch (err) {
        // An error occurred, send an error message
        res.status(400).json(err);
    }
});

// Request to delete a user from the User database
router.delete('/:id', async (req, res) => {
    try {
        // Delete the user with the specified ID
        const userData = await User.destroy({
            where: {
                id: req.params.id
            }
        });

        // If no user with the specified ID was found, send an error message
        if (!userData) {
            res.status(404).json({message: 'No user found with this id!'});
            return;
        }

        // Send the deleted user data as a JSON
        res.status(200).json(userData);
    } catch (err) {
        // An error occurred, send an error message
        res.status(500).json(err);
    }
});

// Request to get information of a specific user
router.get('/:id', async (req, res) => {
    try {
        // Fetch user data for the user with the specified ID
        const userData = await User.findByPk(req.params.id);
        // If no user with the specified ID was found, send an error message
        if (!userData) {
            res.status(404).json({message: 'No user found with this id!'});
            return;
        }
        // Send the user data of the specific user as a JSON
        res.status(200).json(userData);
    } catch (err) {
        // An error occurred, send an error message
        res.status(500).json(err);
    }
});

// Request to update information of a specific user
router.put('/:id', async (req, res) => {
    try {
        // Update the user data with the specified ID
        const userData = await User.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        // If no user with the specified ID was found, send an error message
        if (!userData) {
            res.status(404).json({message: 'No user found with this id!'});
            return;
        }
        // Send the updated user data as a JSON
        res.status(200).json(userData);
    } catch (err) {
        // An error occurred, send an error message
        res.status(500).json(err);
    }
});



module.exports = router;