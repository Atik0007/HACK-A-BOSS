const generateError = require('../../utils/generateError');

const getConnection = require('../getConnection');

const deleteTableDB = async (idTable) => {
    let connection;
    try {
        connection = await getConnection();

        const [table] = await connection.query(
            'SELECT * FROM tables WHERE id = ?',
            [idTable]
        );

        if (table.length < 0) {
            throw generateError(404, 'Table not found');
        }

        await connection.query('DELETE FROM tables WHERE id = ?', [idTable]);
    } finally {
        if (connection) {
            connection.release();
        }
    }
};

module.exports = deleteTableDB;
