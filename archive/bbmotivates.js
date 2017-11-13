var Twit = require('twit');
var config = require('./config'); //Twitter API keys

var T = new Twit(config);

var followers = Array();

//Get followers from Twitter thru REST API
function getFollowers(){
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
			tweetIt("@"+luckyFollower+ " you're my lucky follower today (づ｡◕‿‿◕｡)づ")
		}
	}
}

//Send Tweet
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

getFollowers();

