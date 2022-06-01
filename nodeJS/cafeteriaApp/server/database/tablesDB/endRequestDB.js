const getConnection = require('../getConnection');

const generateError = require('../../utils/generateError');

const endRequestDB = async (idTable) => {
    let connection;
    try {
        connection = await getConnection();

        const [tables] = await connection.query(
            'SELECT id , request FROM tables WHERE id = ?',
            [idTable]
        );

        if (tables.length === 0) {
            throw generateError(404, 'Table not found');
        }

        if (tables[0].request === 0) {
            throw generateError(404, 'You need to request a Request first');
        }

        await connection.query(
            'UPDATE tables SET attended = false, request = false WHERE id = ?',
            [idTable]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = endRequestDB;
