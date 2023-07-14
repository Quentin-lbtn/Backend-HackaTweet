const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
	text : String,
    hashtag : [String],
    username : String,

});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;