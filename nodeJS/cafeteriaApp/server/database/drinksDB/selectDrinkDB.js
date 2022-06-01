const getConnection = require('../getConnection');

const selectDrinkDB = async () => {
    let connection;

    try {
        connection = await getConnection();

        const [drinks] = await connection.query('SELECT * FROM drinks');

        return drinks;
    } finally {
        if (connection) {
            connection.release();
        }
    }
};

module.exports = selectDrinkDB;
