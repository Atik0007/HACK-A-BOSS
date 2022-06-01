const selectDrink = require('../../database/drinksDB/selectDrinkDB');

const listDrink = async (req, res, next) => {
    try {
        const drinks = await selectDrink();
        res.json({
            status: 'Success',
            data: {
                drinks,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = listDrink;
