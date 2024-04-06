const express = require('express');
const router = express.Router();
//Model
const Model = require("./model/model");

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
    res.send(req.params.id);
});

// UPDATE Method (by ID) - Updating Data
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API');
});

// DELETE Method (by ID) - Deleting Data
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API');
});
//Post data to the database
router.post('/post', (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    });

    try{
        const dataToSave = data.save();
        res.status(200).json(dataToSave);
    }
    catch(err){
        //
    }
})

module.exports = router;