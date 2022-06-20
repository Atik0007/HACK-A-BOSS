const getConnection = require('../getConnection');

const selectAllTweetsQuery = async (keyword) => {
    let connection;

    try {
        connection = await getConnection();

        let tweets;

        // Si hay palabra clave "keyword" buscamos los tweets que contengan esa palabra
        // clave. De lo contrario retornamos todos los tweets.
        if (keyword) {
            [tweets] = await connection.query(
                `
                    SELECT T.id, T.idUser, T.text, T.image, T.createdAt, U.email
                    FROM tweets T
                    LEFT JOIN users U 
                    ON T.idUser = U.id
                    WHERE T.text LIKE ?
                    ORDER BY T.createdAt DESC
                `,
                [`%${keyword}%`]
            );
        } else {
            [tweets] = await connection.query(
                `
                    SELECT T.id, T.idUser, T.text, T.image, T.createdAt, U.email
                    FROM tweets T
                    LEFT JOIN users U 
                    ON T.idUser = U.id
                    ORDER BY T.createdAt DESC
                `
            );
        }

        return tweets;
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selectAllTweetsQuery;
