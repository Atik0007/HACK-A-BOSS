const insertUser = require('../db/userQueries/insertUserQuery.js');
const { generateError } = require('../helper');

const newUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        /* Checking if the email or password is missing. If it is missing, it will throw an error. */
        if (!email || !password) {
            throw generateError(400, 'Missing parameters');
        }

        const idUser = await insertUser(email, password);

        res.send({
            status: 'success',
            message: `User id ${idUser} created`,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newUser;
