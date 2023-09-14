const router = require('express').Router();
const { Pet, User } = require('../models');


// Request to get all pets from the database
router.get('/', async (req, res) => {
    try {
        // Fetch data from Pet table
        const petData = await Pet.findAll();
        // Send the pet data as a JSON
        res.status(200).json(petData);
    } catch (err) {
        // An error occurred, send an error message
        res.status(500).json(err);
    }
});

// Request to add a new pet to the Pet database
router.post('/', async (req, res) => {
    try {
        // Create a new pet row in the Pet table
        const petData = await Pet.create(req.body);
        // Send the new pet data as a JSON
        res.status(200).json(petData);
    } catch (err) {
        // An error occurred, send an error message
        res.status(400).json(err);
    }
});

// Request to delete a pet from the Pet database
router.delete('/:id', async (req, res) => {
    try {
        // Delete the pet with the specified ID
        const petData = await Pet.destroy({
            where: {
                id: req.params.id
            }
        });

        // If no pet with the specified ID was found, send an error message
        if (!petData) {
            res.status(404).json({message: 'No pet found with this id!'});
            return;
        }

        // Send the deleted pet data as a JSON
        res.status(200).json(petData);
    } catch (err) {
        // An error occurred, send an error message
        res.status(500).json(err);
    }
});

// Request to get information of a specific pet
router.get('/:id', async (req, res) => {
    try {
        // Fetch pet data for the pet with the specified ID
        const petData = await Pet.findByPk(req.params.id);
        // If no pet with the specified ID was found, send an error message
        if (!petData) {
            res.status(404).json({message: 'No pet found with this id!'});
            return;
        }
        // Send the pet data of the specific pet as a JSON
        res.status(200).json(petData);
    } catch (err) {
        // An error occurred, send an error message
        res.status(500).json(err);
    }
});

// Request to update information of a specific pet
router.put('/:id', async (req, res) => {
    try {
        // Update the pet data with the specified ID
        const petData = await Pet.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        // If no pet with the specified ID was found, send an error message
        if (!petData) {
            res.status(404).json({message: 'No pet found with this id!'});
            return;
        }
        // Send the updated pet data as a JSON
        res.status(200).json(petData);
    } catch (err) {
        // An error occurred, send an error message
        res.status(500).json(err);
    }
});



module.exports = router;