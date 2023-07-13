var express = require('express');
var router = express.Router();
require('../models/connection');

const Tweet = require('../models/tweets');

router.get('/', (req, res) => {

    Tweet.find().then(data => {

    res.json( {Tweet : data });

    })
    
  });




router.post('/' , (req, res) => {

    const newTweet = new Tweet({
        text: req.body.text,
        hashtag: req.body.hashtag,
        username: req.body.userId
})
    newTweet.save().then(savedTweet => {
        if (!req.body.text || !req.body.username) {

            res.json({ error : 'tweet no add'});
        
        } else {

           res.json({ savedTweet});

        }
     
})  
})


 router.get('/:hashtag', (req, res) => {
      
    Tweet.find({ hashtag: req.params.hashtag })
    .then(tweets => {
        if(tweets.length) {
            res.json({ tweets });
        } else {
           res.json({ error: 'No tweets found with #hashtagname'})
        }
   
    })
 })


module.exports = router;