const getConnection = require('../database/getConnection');

const user = async () => {
    let connection;
    try {
        connection = await getConnection();
        console.log('******* Delete user table ******');
        await connection.query('DROP TABLE IF EXISTS users');
        console.log('**** Create users table ****');
        // create table users with id ,name , role default user and createdAt
        await connection.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT  AUTO_INCREMENT,
                name VARCHAR(50) UNIQUE NOT NULL,
                role ENUM('user', 'admin')  DEFAULT 'user',
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (id)
                     )`);

        console.log('**** Created table  ****');
        await connection.query(`
            INSERT INTO users (name, role)
            VALUES ('admin', 'admin')
            `);
        console.log('**** Inserted admin user ****');
    } catch (err) {
        console.log(err);
    } finally {
        if (connection) {
            connection.release();
        }
    }
};

module.exports = user;
