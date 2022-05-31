const getConnection = require('../database/getConnection');

const drinks = async () => {
    let connection;
    try {
        connection = await getConnection();
        console.log('******* Delete (drinks) table ******');
        await connection.query('DROP TABLE IF EXISTS users');
        console.log('**** Created drinks table ****');
        // create table drinks with id ,name and createdAt
        await connection.query(`
            CREATE TABLE IF NOT EXISTS drinks (
                id INT  AUTO_INCREMENT,
                name VARCHAR(50) UNIQUE NOT NULL,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (id)

                     )`);
    } catch (err) {
        console.log(err);
    } finally {
        if (connection) {
            connection.release();
        }
    }
};

module.exports = drinks;
