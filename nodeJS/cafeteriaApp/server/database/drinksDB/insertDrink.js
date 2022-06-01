const getConnection = require('../getConnection');

const generateError = require('../../utils/generateError.js');

const insertDrink = async (name) => {
    let connection;
    try {
        connection = await getConnection();

        const [drink] = await connection.query(
            'SELECT id FROM drinks WHERE name = ?',
            [name]
        );

        if (drink.length > 0) {
            throw generateError(403, 'Drink already exists');
        }

        await connection.query('INSERT INTO drinks (name) VALUES (?)', [name]);
    } finally {
        if (connection) {
            connection.release();
        }
    }
};

module.exports = insertDrink;
