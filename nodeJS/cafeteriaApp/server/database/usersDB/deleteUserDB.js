const generateError = require('../../utils/generateError');

const getConnection = require('../getConnection');

const deleteUserDB = async (idUser) => {
    let connection;
    try {
        connection = await getConnection();

        const [user] = await connection.query(
            'SELECT role FROM users WHERE id = ?',
            [idUser]
        );

        if (user.length < 1) {
            throw generateError(404, 'User not found');
        }

        // if user is admin, can't delete
        if (user[0].role === 'admin') {
            throw generateError(403, "Can't delete admin");
        }

        await connection.query('DELETE FROM users WHERE id = ?', [idUser]);
    } finally {
        if (connection) {
            connection.release();
        }
    }
};

module.exports = deleteUserDB;
