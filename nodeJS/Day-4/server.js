require('dotenv').config();

const { PORT } = process.env;

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

/* Endpoint Users */
const newUser = require('./controllers/newUser');
const getUser = require('./controllers/getUser');
const loginUser = require('./controllers/loginUser');
//Register a new user
app.post('/users', newUser);
//Information about a user
app.get('/users', getUser);
//Information about a user tokken

//Login a user
app.post('/users/login', loginUser);
//middleware Error
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send({
        status: 'error',
        message: err.message,
    });
});

//Middleware not found
app.use((req, res) => {
    res.status(404).send({
        status: 'error',
        message: 'Not found',
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
