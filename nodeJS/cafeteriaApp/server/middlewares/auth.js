const jwt = require('jsonwebtoken');

const authUser = (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            throw new Error('No token provided', 401);
        }

        let token;

        try {
            token = jwt.verify(authorization, process.env.SECRET);
        } catch (err) {
            throw new Error('Invalid token', 401);
        }

        req.user = token;

        next();
    } catch (err) {
        next(err);
    }
};

module.exports = authUser;
