const express = require('express');
const router = express.Router();

// POST Method - Creating data
router.post('/post', (req, res) => {
    res.send('Post API');
})

module.exports = router;