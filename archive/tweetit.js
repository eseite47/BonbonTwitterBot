/*
	This module contains the different tweeting methods I have built
*/

// import message module
var Twit = require('twit');
var config = require('./config');
var messages = require ('./messages');

var T = new Twit(config);

//Tweets any txt
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
};
module.exports.tweetIt = tweetIt;


//Sends encouraging message to new followers
function thanksForFollow(data){
	var tweet = messages.atMention();
	var screenName = data.source.screen_name;
	tweetIt("@" + screenName + " " + tweet);
	console.log(screenName + " is now following Bonbon.")
	console.log("@" + screenName + tweet);
};
module.exports.thanksForFollow = thanksForFollow;

//Tweets an inspirational quote
function sendQuote(){
	var quote = messages.quote();
	console.log(quote);
	tweetIt(quote);
};
module.exports.sendQuote = sendQuote;

//Tweet at a random follower
function tweetAtFollower(){
	var followers = Array();
	var params = { 
		screen_name: 'bonbon_47' 
	};
	T.get('followers/list', params, gotData);

	function gotData(err, data, response) {
		if (err){
	  	console.log("Something went wrong!");
	  }
	  else{
			for (var i = 0; i < data.users.length; i++){
				followers.push(data.users[i].screen_name);
				}	
			var luckyFollower = followers[Math.floor(Math.random()*followers.length)];
			console.log("Lucky Follower: " + luckyFollower);
			var tweet = messages.atMention();
			console.log(tweet);
			tweetIt("@" + luckyFollower + " " + tweet);		
		}
	}
}
module.exports.tweetAtFollower = tweetAtFollower;




