/* const generateError = require('../../utils/generateError'); */

const createTable = require('../../database/tablesDB/createTable.js');

const newTable = async (req, res, next) => {
    try {
        /* const { id } = req.body;
        if (!id) {
            throw generateError(400, 'Missing id');
        } */
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
