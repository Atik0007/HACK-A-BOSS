const selectUserById = require('../db/userQueries/selectUserByIdQuery.js');
const { generateError } = require('../helper.js');

const getUser = async (req, res, next) => {
    try {
        console.log('req.params.idUser', req.params);
        const { id } = req.params;
        console.log('id', id);

        /* Checking if the id is missing. If it is missing, it will throw an error. */
        if (!id) {
            throw generateError(400, 'Missing parameters');
        }

        const user = await selectUserById(id);

        res.send({
            status: 'success',
            data: user,
        });
    } catch (err) {
        next(err);
    }
};
module.exports = getUser;
