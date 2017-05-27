console.log("Hi! I am Bonbon. Nice to meet you!");

var Twit = require('twit');
var config = require('./config'); //Twitter API keys

var T = new Twit(config);

setting up a user stream
var stream = T.stream('user');

//Anytime someone follows me
stream.on('follow', followed);

function followed(eventMsg){
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	tweetIt("@" + screenName + " you're awesome!" );
	console.log(screenName + " is now following Bonbon.")
}

function tweetIt(txt){
	var tweet = {
		status: txt, 
	};

	T.post('statuses/update', tweet, tweeted);

	function tweeted (err, data, response) {
	  if (err){
	  	console.log("Something went wrong!");
	  }
	  else{
	  	console.log("it worked!");
		}
	};
}
