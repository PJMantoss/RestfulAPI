const express = require('express');
const router = express.Router();

// POST Method - Creating data
router.post('/post', (req, res) => {
    res.send('Post API');
})

// GET Method - Reading Data
router.get('/getAll', (req, res) => {
    res.send('Get All API');
});

// GET Method (by ID) - Reading Data
router.get('/getOne/:id', (req, res) => {
    res.send('Get By ID API');
});

// UPDATE Method (by ID) - Updating Data
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API');
})
module.exports = router;