const jwt = require('jsonwebtoken');

const selectUserByName = require('../../database/usersDB/selectUserByName');

const generateError = require('../../utils/generateError');

const newUser = async (req, res, next) => {
    try {
        const { name } = req.body;

        if (!name) {
            throw generateError(400, 'Missing name');
        }

        const user = await selectUserByName(name);

        const payload = {
            id: user.id,
            role: user.role,
        };

        const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: '15d',
        });

        res.send({
            status: 'ok',
            data: {
                token,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newUser;
