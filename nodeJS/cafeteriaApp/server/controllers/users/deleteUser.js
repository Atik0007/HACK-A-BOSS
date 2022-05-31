const generateError = require('../../utils/generateError');
const deleteUserDB = require('../../database/usersDB/deleteUserDB');

const deleteUser = async (req, res, next) => {
    try {
        const { idUser } = req.params;

        if (!idUser) {
            throw generateError(400, 'Missing id');
        }
        await deleteUserDB(idUser);

        res.send({
            status: 'ok',
            message: 'User deleted',
        });
    } catch (err) {
        next(err);
    }
};
module.exports = deleteUser;
