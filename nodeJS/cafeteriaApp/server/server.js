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

//Auth token
const authUser = require('./middlewares/auth');

//Admin required
const isAdmin = require('./middlewares/isAdmin');

/**
 * ####################
 * ## Endpoints User ##
 * ####################
 */
const { loginUser, newUser, deleteUser } = require('./controllers/users');

// Login
app.post('/login', loginUser);

//Create new user
app.post('/user/register', authUser, isAdmin, newUser);

//Delete user
app.delete('/user/:idUser', authUser, isAdmin, deleteUser);

/**
 * #####################
 * ## Endpoints Drink ##
 * #####################
 */
const { newDrink, deleteDrink, listDrink } = require('./controllers/drinks');

//Add new drink
app.post('/drinks', authUser, isAdmin, newDrink);

//Show all drinks
app.get('/drinks', listDrink);

//Delete drink
app.delete('/drinks/:idDrink', authUser, isAdmin, deleteDrink);

/**
 * #####################
 * ## Endpoints Table ##
 * #####################
 */

const {
    newTable,
    deleteTable,
    newTableRequest,
    newPayRequest,
    newAttendRequest,
    endRequest,
    endPay,
} = require('./controllers/tables');

//Create a new table
app.post('/table', authUser, isAdmin, newTable);

//Request a new table
app.put('/table/:idTable/request', newTableRequest);

// Request a pay
app.put('/table/:idTable/pay', newPayRequest);

// Request a attend
app.put('/table/:idTable/attend', authUser, newAttendRequest);

// End a request
app.put('/table/:idTable/request/end', authUser, endRequest);

// End a pay
app.put('/table/:idTable/pay/end', authUser, endPay);

// Delete a table
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
