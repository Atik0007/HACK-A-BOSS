require('dotenv').config();

const { PORT } = process.env;

const express = require('express');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());

// Logger morgan.
app.use(morgan('dev'));

// Deserializamos un body con formato "raw".
app.use(express.json());

app.use(express.static('uploads'));

// Deserializamos un body con formato "form-data".
app.use(fileUpload());

/**
 * #################
 * ## Middlewares ##
 * #################
 */

const authUser = require('./middlewares/authUser');

/**
 * ########################
 * ## Endpoints Usuarios ##
 * ########################
 */

const {
    newUser,
    getUser,
    getOwnUser,
    loginUser,
} = require('./controllers/users');

// Registrar un usuario.
app.post('/users', newUser);

// Información sobre un usuario.
app.get('/users/:idUser', getUser);

// Información sobre el usuario del token.
app.get('/users', authUser, getOwnUser);

// Login de usuario.
app.post('/login', loginUser);

/**
 * ######################
 * ## Endpoints Tweets ##
 * ######################
 */

const {
    newTweet,
    listTweets,
    getTweet,
    deleteTweet,
} = require('./controllers/tweets');

// Crear un tweet.
app.post('/tweets', authUser, newTweet);

// Listar todos los tweets.
app.get('/tweets', listTweets);

// Información sobre un tweet.
app.get('/tweets/:idTweet', getTweet);

// Borrar un tweet.
app.delete('/tweets/:idTweet', authUser, deleteTweet);

/**
 * ######################
 * ## Middleware Error ##
 * ######################
 */

app.use((err, req, res, next) => {
    console.error(err);

    res.status(err.statusCode || 500).send({
        status: 'error',
        message: err.message,
    });
});

/**
 * ##########################
 * ## Middleware Not Found ##
 * ##########################
 */

app.use((req, res) => {
    res.status(404).send({
        status: 'error',
        message: 'Not found',
    });
});

app.listen(PORT, () => {
    console.log(`Server listening http://localhost:${PORT}`);
});
