const selectTweetByIdQuery = require('../../db/tweetQueries/selectTweetByIdQuery');

const getTweet = async (req, res, next) => {
    try {
        const { idTweet } = req.params;

        const tweet = await selectTweetByIdQuery(idTweet);

        res.send({
            status: 'ok',
            data: {
                tweet,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = getTweet;
