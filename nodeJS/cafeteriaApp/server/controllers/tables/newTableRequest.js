const updateTableRequestDB = require('../../database/tablesDB/updateTableRequestDB');

const newTableRequest = async (req, res, next) => {
    try {
        const { idTable } = req.params;

        await updateTableRequestDB(idTable);

        res.send({
            status: 'ok',
            message: 'Table request sent ',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newTableRequest;
