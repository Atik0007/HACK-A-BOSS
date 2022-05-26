const getConnection = require('../getConnection');

const { generateError } = require('../../helper');

const selectUserById = async (idUser) => {
    let connection;
    try {
        // Getting a connection from the pool.
        connection = await getConnection();

        const [users] = await connection.query(
            `SELECT id, email, password FROM users WHERE id = ?`,
            [idUser]
        );
        // Checking if the user exists.
        if (users.length < 1) {
            throw generateError(404, 'User not found');
        }

        // Returning the first element of the array.
        return users[0];
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selectUserById;
