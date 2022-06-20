const selectTweetByIdQuery = require('../../db/tweetQueries/selectTweetByIdQuery');
const deleteTweetQuery = require('../../db/tweetQueries/deleteTweetQuery');

const { generateError, deletePhoto } = require('../../helpers');

const deleteTweet = async (req, res, next) => {
    try {
        const { idTweet } = req.params;

        // Obtenemos la info del tweet que queremos borrar.
        const tweet = await selectTweetByIdQuery(idTweet);

        // Si el id del tweet no coincide con el id del token lanzamos un error.
        if (req.idUser !== tweet.idUser) {
            throw generateError('No tienes suficientes permisos', 401);
        }

        // Si el tweet tiene vinculada una imagen la eliminamos del disco.
        if (tweet.image) {
            await deletePhoto(tweet.image);
        }

        await deleteTweetQuery(idTweet);

        res.send({
            status: 'ok',
            message: 'Tweet eliminado',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = deleteTweet;
