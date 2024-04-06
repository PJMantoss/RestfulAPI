require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
//Routes for the Endpoints
const routes = require('./routes/routes');

//Connect Databse to Server using Mongoose
mongoose.connect(mongoString);
const database = mongoose.connection;

// Throw a message depending on whether DB connection is successful or fails
database.on('error', (error) => {
    console.log(error);
});
//Connect database once
database.once('connected', () => {
    console.log('Database Connected!');
});

const app = express();

app.use(express.json());

//Use routes
app.use('/api', routes);

app.listen(3000, () => {
    console.log(`Server Started at Port ${3000}`)
});
