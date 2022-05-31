const getConnection = require('../getConnection');

const generateError = require('../../utils/generateError');

const createTable = async (id) => {
    let connection;
    try {
        connection = await getConnection();

        const [table] = await connection.query(
            'SELECT id FROM tables WHERE id = ?',
            [id]
        );

        if (table.length > 0) {
            throw generateError(400, 'Table already exists');
        }

        await connection.query('INSERT INTO tables (id) VALUES (?)', [id]);
    } finally {
        if (connection) {
            connection.release();
        }
    }
};

module.exports = createTable;
