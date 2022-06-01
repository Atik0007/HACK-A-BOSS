const endPayDB = require('../../database/tablesDB/endPayDB');

const endPay = async (req, res, next) => {
    try {
        const { idTable } = req.params;

        await endPayDB(idTable);

        res.send({
            status: 'ok',
            message: 'Pay end sent ',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = endPay;
