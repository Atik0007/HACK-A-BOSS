const generateError = require('../../utils/generateError');
const deleteTableDB = require('../../database/tablesDB/deleteTableDB.js');

const deleteTable = async (req, res, next) => {
    try {
        const { idTable } = req.params;

        if (!idTable) {
            throw generateError(400, 'Missing id');
        }
        await deleteTableDB(idTable);

        res.send({
            status: 'ok',
            message: 'Table deleted',
        });
    } catch (err) {
        next(err);
    }
};
module.exports = deleteTable;
