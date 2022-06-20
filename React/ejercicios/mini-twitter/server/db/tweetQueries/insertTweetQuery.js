const getConnection = require('../getConnection');

const insertTweetQuery = async (idUser, text, image = '') => {
    let connection;

    try {
        connection = await getConnection();

        await connection.query(
            `
                INSERT INTO tweets (idUser, text, image)
                VALUES (?, ?, ?)
            `,
            [idUser, text, image]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = insertTweetQuery;
