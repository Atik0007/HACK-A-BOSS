const getConnection = require('../getConnection');

const generateError = require('../../utils/generateError');

const endPayDB = async (idTable) => {
    let connection;
    try {
        connection = await getConnection();

        const [tables] = await connection.query(
            'SELECT id , pay FROM tables WHERE id = ?',
            [idTable]
        );

        if (tables.length === 0) {
            throw generateError(404, 'Table not found');
        }

        if (tables[0].pay === 0) {
            throw generateError(404, 'You need to request a Pay first');
        }

        await connection.query(
            'UPDATE tables SET attended = false, pay = false WHERE id = ?',
            [idTable]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = endPayDB;
