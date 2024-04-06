const express = require('express');
const router = express.Router();
//Model
const Model = require("./model/model");

// POST Method - Creating data
/*router.post('/post', (req, res) => {
    res.send('Post API');
})*/

// GET Method - Reading Data
/*router.get('/getAll', (req, res) => {
    res.send('Get All API');
});*/

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
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    });

    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
});

// Get All data from the DB
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

//Get an item by its ID
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data);
    }
    catch(err){
        res.status().json({message: err.message});
    }
});

module.exports = router;