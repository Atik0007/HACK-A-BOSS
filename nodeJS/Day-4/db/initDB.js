const getConnection = require('./getConnection');

async function initDB() {
    let connection;

    try {
        connection = await getConnection();

        console.log('Deleting all tables...');

        await connection.query('DROP TABLE IF EXISTS tweets');
        await connection.query('DROP TABLE IF EXISTS users');
        console.log('Creating tables...');

        await connection.query(`
            CREATE TABLE users (
                id INTEGER PRIMARY KEY AUTO_INCREMENT,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                modifiedAT DATETIME ON UPDATE CURRENT_TIMESTAMP
                )`);
        await connection.query(`
            CREATE TABLE tweets (
                id INTEGER PRIMARY KEY AUTO_INCREMENT,
                idUser INTEGER NOT NULL,
                text VARCHAR(255) NOT NULL,
                image VARCHAR(255) DEFAULT NULL,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                modifiedAT DATETIME ON UPDATE CURRENT_TIMESTAMP
                )`);
        console.log('Every table created successfully.');
    } catch (err) {
        console.error(err);
    } finally {
        if (connection) {
            connection.release();
        }
        process.exit();
    }
}

initDB();
