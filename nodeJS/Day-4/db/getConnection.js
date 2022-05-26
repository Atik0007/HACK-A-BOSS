/* Loading the environment variables from the .env file. */
require('dotenv').config();

/* Importing the mysql module. */
const mysql = require('mysql2/promise');

/* Destructuring the environment variables from the process.env object. */
const { PORT, MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB } = process.env;

let connectionPool;

const getConnection = async () => {
    try {
        /* Checking if the connectionPool is already created. If it is not, then it creates it. */
        if (!connectionPool) {
            connectionPool = mysql.createPool({
                connectionLimit: 10,
                host: MYSQL_HOST,
                user: MYSQL_USER,
                password: MYSQL_PASS,
                database: MYSQL_DB,
                timezone: 'Z',
            });
        }
        return await connectionPool.getConnection();
    } catch (err) {
        throw new Error(`
            Failed to connect to database`);
    }
};

module.exports = getConnection;
