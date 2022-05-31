const generateError = require('../../utils/generateError');

const insertDrinks = require('../../database/drinksDB/insertDrink.js');

const newDrink = async (req, res, next) => {
    try {
        const { name } = req.body;

        if (!name) {
            throw generateError(400, 'Missing name');
        }

        await insertDrinks(name);

        res.send({
            status: 'ok',
            message: 'Drink created',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newDrink;
