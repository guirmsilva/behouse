require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userController = require('./controllers/userController');
app.use('/user', userController);

const DB_USER = process.env.DB_USER;
const DB_PASS = encodeURIComponent(process.env.DB_PASS);

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@bhcluster.uvmuf.mongodb.net/behousedb?retryWrites=true&w=majority`)
.then(() => {
    console.log('Database Connected');
    app.listen(5000);
})
.catch(() => {
    console.log('Database Connection Error');
});