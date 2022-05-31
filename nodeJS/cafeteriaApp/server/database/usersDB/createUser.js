const getConnection = require('../getConnection');

const generateError = require('../../utils/generateError');

const createUser = async (name) => {
    let connection;
    try {
        connection = await getConnection();

        const [user] = await connection.query(
            'SELECT id FROM users WHERE name = ?',
            [name]
        );

        if (user.length > 0) {
            throw generateError(400, 'User already exists');
        }

        await connection.query('INSERT INTO users (name) VALUES (?)', [name]);
    } finally {
        if (connection) {
            connection.release();
        }
    }
};

module.exports = createUser;
