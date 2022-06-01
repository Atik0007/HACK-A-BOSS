const updateAttendRequestDB = require('../../database/tablesDB/updateAttendRequestDB');

const newAttendRequest = async (req, res, next) => {
    try {
        const { idTable } = req.params;

        await updateAttendRequestDB(idTable);

        res.send({
            status: 'ok',
            message: 'Table attend sent ',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newAttendRequest;
