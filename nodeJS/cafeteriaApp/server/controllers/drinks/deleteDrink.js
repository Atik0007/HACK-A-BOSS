const generateError = require('../../utils/generateError');

const deleteDrinkDB = require('../../database/drinksDB/deleteDrinkDB.js');

const deleteDrink = async (req, res, next) => {
    try {
        const { idDrink } = req.params;

        if (!idDrink) {
            throw generateError(400, 'Missing id');
        }
        await deleteDrinkDB(idDrink);

        res.send({
            status: 'ok',
            message: 'Drink deleted',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = deleteDrink;
