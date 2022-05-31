require('dotenv').config();

const { PORT } = process.env;

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

/**
 * #####################
 * ## MIDDLEWARES ######
 * #####################
 */

const authUser = require('./middlewares/auth');
const isAdmin = require('./middlewares/isAdmin');

/**
 * ####################
 * ## Endpoints User ##
 * ####################
 */
const { loginUser, newUser, deleteUser } = require('./controllers/users');

app.post('/login', loginUser);

app.post('/user/register', authUser, isAdmin, newUser);

app.delete('/user/:idUser', authUser, isAdmin, deleteUser);

/**
 * #####################
 * ## Endpoints Drink ##
 * #####################
 */
const { newDrink, deleteDrink } = require('./controllers/drinks');

app.post('/drinks', authUser, isAdmin, newDrink);

app.delete('/drinks/:idDrink', authUser, isAdmin, deleteDrink);

/**
 * #####################
 * ## Endpoints Table ##
 * #####################
 */

const { newTable, deleteTable } = require('./controllers/tables');

app.post('/table', authUser, isAdmin, newTable);

app.delete('/table/:idTable', authUser, isAdmin, deleteTable);

//Middleware Error
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send({
        message: err.message,
        status: 'Error',
    });
});

//Middleware Not Found
app.use((req, res) => {
    res.status(404).send({
        status: 404,
        message: 'Not Found',
    });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
