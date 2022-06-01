const getConnection = require('../getConnection');

const createTable = async () => {
    let connection;
    try {
        connection = await getConnection();

        await connection.query('INSERT INTO tables () VALUES ()');
    } finally {
        if (connection) {
            connection.release();
        }
    }
};

module.exports = createTable;
