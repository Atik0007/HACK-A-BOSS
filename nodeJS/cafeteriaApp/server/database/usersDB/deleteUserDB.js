const generateError = require('../../utils/generateError');

const getConnection = require('../getConnection');

const deleteUserDB = async (idUser) => {
    let connection;
    try {
        connection = await getConnection();

        const [user] = await connection.query(
            'SELECT id FROM users WHERE id = ?',
            [idUser]
        );

        if (user.length < 0) {
            throw generateError(404, 'User not found');
        }

        // if user is admin, can't delete
        if (user[0]) {
            throw generateError(400, "Can't delete admin");
        }

        await connection.query('DELETE FROM users WHERE id = ?', [idUser]);
    } finally {
        if (connection) {
            connection.release();
        }
    }
};

module.exports = deleteUserDB;
