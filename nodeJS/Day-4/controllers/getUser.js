const selectUserById = require('../db/userQueries/selectUserByIdQuery.js');
const { generateError } = require('../helper.js');

const getUser = async (req, res, next) => {
    try {
        const { idUser } = req.params;

        /* Checking if the id is missing. If it is missing, it will throw an error. */
        if (!idUser) {
            throw generateError(400, 'Missing parameters');
        }

        const user = await selectUserById(idUser);

        res.send({
            status: 'success',
            data: user,
        });
    } catch (err) {
        next(err);
    }
};
module.exports = getUser;
