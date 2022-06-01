const endRequestDB = require('../../database/tablesDB/endRequestDB');

const endRequest = async (req, res, next) => {
    try {
        const { idTable } = req.params;

        await endRequestDB(idTable);

        res.send({
            status: 'ok',
            message: 'Request end sent ',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = endRequest;
