/* const generateError = require('../../utils/generateError'); */

const createTable = require('../../database/tablesDB/createTableDB.js');

const newTable = async (req, res, next) => {
    try {
        await createTable();

        res.send({
            status: 'ok',
            message: 'Table created',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newTable;
