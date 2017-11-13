var Twit = require('twit');
var config = require('./config'); //Twitter API keys
var tweetit = require('./tweetit');
var messages = require('./messages');
var redditData = require('./redditParser.js')

var T = new Twit(config);

//setting up a user stream
var stream = T.stream('user');

//Sends @mention to new followers
stream.on('follow', tweetit.thanksForFollow);

//Sends a quote every 47 min
//setTimeout (tweetit.sendQuote, 30000);
setInterval(tweetit.sendQuote, 1000 * 60 * 5);

//Sends @mention to one of my followers every 2 hours
tweetit.tweetAtFollower();
setInterval(tweetit.tweetAtFollower, 1000 * 60 * 120);

//tweet stuff from reddit r/aww
setInterval(redditData(), 1000 * 60 * 60 * 6)
