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
        username: req.body.username,
        // username: req.body.userId
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


// .buttontweet {
//     font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
//     width: 100px;
//     height: 30px;
//     background-color: #3f9bf0;
//     border-radius: 30px;
//     color: white;
//     border-color: none;
//     margin: 5px;
//     }
//     HTML
//     <div id="tweet">
//     <Button class="buttontweet">Tweet</Button>
//     </div>