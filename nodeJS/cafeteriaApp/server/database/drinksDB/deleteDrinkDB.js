const generateError = require('../../utils/generateError');

const getConnection = require('../getConnection');

const deleteDrink = async (idDrink) => {
    let connection;
    try {
        connection = await getConnection();

        const [drink] = await connection.query(
            'SELECT id FROM drinks WHERE id = ?',
            [idDrink]
        );

        if (drink.length < 0) {
            throw generateError(404, 'Drink not found');
        }

        await connection.query('DELETE FROM drinks WHERE id = ?', [idDrink]);
    } finally {
        if (connection) {
            connection.release();
        }
    }
};

module.exports = deleteDrink;
