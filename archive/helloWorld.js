console.log("Hi! I am Bonbon. Nice to meet you!");

var Twit = require('twit');
var config = require('./config'); //Twitter API keys

var T = new Twit(config);

var tweet = {
	status: "If opportunity doesn't knock, build a door. -- Milton Berle"
}

T.post('statuses/update', tweet, tweeted);

function tweeted (err, data, response) {
  console.log(data)
};

/*
var params = { 
	q: '#awesome', 
	count: 10 
};

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
	var tweets = data.statuses;
	for (var i = 0; i < tweets.length; i++){
		console.log(tweets[i].text);
	}
};
*/

