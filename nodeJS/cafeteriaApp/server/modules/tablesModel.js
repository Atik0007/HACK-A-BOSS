const getConnection = require('../database/getConnection');

const tables = async () => {
    let connection;
    try {
        connection = await getConnection();
        console.log('******* Delete (tables) table ******');
        await connection.query('DROP TABLE IF EXISTS tables');
        console.log('**** Created tables table ****');
        // create table users with id ,request = false, pay = false, attended = false, createdAt
        await connection.query(`
            CREATE TABLE IF NOT EXISTS tables (
                id INT  AUTO_INCREMENT,
                request BOOLEAN  DEFAULT false,
                pay BOOLEAN  DEFAULT false,
                attended BOOLEAN  DEFAULT false,
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

module.exports = tables;
