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

module.exports = router;