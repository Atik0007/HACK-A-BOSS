const bcrypt = require('bcrypt');
const selectUserByEmail = require('../db/userQueries/selectUserByEmailQuery.js');

const { generateError } = require('../helper');

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        /* Checking if the email or password is missing. If it is missing, it will throw an error. */
        if (!email || !password) {
            throw generateError(400, 'Missing parameters');
        }

        const user = await selectUserByEmail(email);

        if (!user) {
            throw generateError(404, 'User not found');
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            throw generateError(401, 'Invalid password');
        }

        res.send({
            status: 'success',
            message: 'User logged in',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = loginUser;
