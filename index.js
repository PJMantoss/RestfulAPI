require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

//Connect Databse to Server using Mongoose
mongoose.connect(mongoString);

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at Port ${3000}`)
});

// MongoDB Compass
// DL URL - https://downloads.mongodb.com/compass/mongodb-compass-1.41.0-darwin-arm64.dmg
// Connection String - mongodb+srv://joelptoss:<password>@cluster0.n7azmij.mongodb.net/
