const dotenv = require('dotenv');
dotenv.config();
const { PORT, MYSQL_DB, MYSQL_PASS } = process.env;
console.log(PORT, MYSQL_DB, MYSQL_PASS);
