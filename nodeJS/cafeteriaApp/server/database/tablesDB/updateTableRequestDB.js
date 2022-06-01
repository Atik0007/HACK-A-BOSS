const getConnection = require('../getConnection');

const generateError = require('../../utils/generateError');

const updateTableRequestDB = async (idTable) => {
    let connection;
    try {
        connection = await getConnection();

        const [tables] = await connection.query(
            'SELECT id FROM tables WHERE id = ?',
            [idTable]
        );

        if (tables.length === 0) {
            throw generateError(404, 'Table not found');
        }

        await connection.query(
            'UPDATE tables SET request = true WHERE id = ?',
            [idTable]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = updateTableRequestDB;
