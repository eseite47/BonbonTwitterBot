var Twit = require('twit');
var config = require('./config'); //Twitter API keys
var tweetit = require ('./tweetit'); 
var messages = require ('./messages');

var T = new Twit(config);
//setting up a user stream
var stream = T.stream('user');

//Sends @mention to new followers
stream.on('follow', tweetit.thanksForFollow);

//Sends a quote every 47 min
tweetit.sendQuote();
setInterval(sendQuote, 1000*60*47);

//Sends @mention to one of my followers every 6 hours
tweetit.tweetAtFollower();
setInterval(sendQuote, 1000*60*60*6);

