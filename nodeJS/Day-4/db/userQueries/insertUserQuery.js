const bcrypt = require('bcrypt');
const getConnection = require('../getConnection');

const { generateError } = require('../../helper');

const insertUser = async (email, password) => {
    let connection;
    try {
        // Getting a connection from the pool.
        connection = await getConnection();

        // We get an array of users that meet the established condition.
        const [users] = await connection.query(
            `SELECT id FROM users WHERE email = ?`,
            [email]
        );
        // Checking if the user already exists.
        if (users.length > 0) {
            throw generateError(409, 'User already exists');
        }

        // Encrypting the password.
        const hashedPassword = await bcrypt.hash(password, 10);

        // Inserting the user into the database.
        const [newUser] = await connection.query(
            `INSERT INTO users (email, password) VALUES (?, ?)`,
            [email, hashedPassword]
        );
        /* Returning the id of the new user. */
        return newUser.insertId;
    } finally {
        if (connection) connection.release();
    }
};

module.exports = insertUser;
