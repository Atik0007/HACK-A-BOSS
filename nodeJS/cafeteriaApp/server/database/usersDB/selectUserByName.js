const getConnection = require('../getConnection');

const generateError = require('../../utils/generateError.js');

const selectUserByName = async (name) => {
    let connection;
    try {
        connection = await getConnection();

        const [user] = await connection.query(
            'SELECT id FROM users WHERE name = ?',
            [name]
        );

        if (user.length < 1) {
            throw generateError(404, 'User not found');
        }

        return user[0];
    } finally {
        if (connection) {
            connection.release();
        }
    }
};

module.exports = selectUserByName;
