const drinksModel = require('../modules/drinksModel');
const tablesModel = require('../modules/tablesModel');
const usersModel = require('../modules/usersModel');
const maim = async () => {
    try {
        await drinksModel();
        await tablesModel();
        await usersModel();
    } catch (err) {
        console.error(err);
    } finally {
        process.exit();
    }
};

maim();
