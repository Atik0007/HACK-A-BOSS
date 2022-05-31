const generateError = require('../utils/generateError');

const isAdmin = (req, res, next) => {
    try {
        if (req.user.role !== 'admin') {
            throw generateError(403, 'You are not admin');
        }
        next();
    } catch (err) {
        next(err);
    }
};

module.exports = isAdmin;
