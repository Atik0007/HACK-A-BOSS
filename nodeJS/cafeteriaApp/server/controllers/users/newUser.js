const generateError = require('../../utils/generateError');

const creatUser = require('../../database/usersDB/createUser.js');
const newUser = async (req, res, next) => {
    try {
        const { name } = req.body;
        if (!name) {
            throw generateError(400, 'Missing user');
        }
        await creatUser(name);

        res.send({
            status: 'ok',
            message: 'User created',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newUser;
