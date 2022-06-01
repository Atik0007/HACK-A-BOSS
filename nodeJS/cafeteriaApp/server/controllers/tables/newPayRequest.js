const updatePayRequestDB = require('../../database/tablesDB/updatePayRequestDB');

const newPayRequest = async (req, res, next) => {
    try {
        const { idTable } = req.params;

        await updatePayRequestDB(idTable);

        res.send({
            status: 'ok',
            message: 'Table pay sent ',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newPayRequest;
