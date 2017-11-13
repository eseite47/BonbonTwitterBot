//setting up a user stream
var stream = T.stream('user');

//Anytime someone follows me
stream.on('follow', followed);

var bbprivatemessage = Array();

bbprivatemessage.push("You're the best! ");
bbprivatemessage.push("Keep up the great work! ");
bbprivatemessage.push("I can't believe how far you've come. Don't give up! ");
bbprivatemessage.push("You are so inspiring. ");
bbprivatemessage.push("Don't hold on to anger; it only hurts you. ");
bbprivatemessage.push("Everything happens for a reason. Don't give up just yet! ");
bbprivatemessage.push("Something awesome is right around the corner! ");
bbprivatemessage.push("sending you a bear hug!! ");
bbprivatemessage.push("Have a wonderful day! ");
bbprivatemessage.push("you've got this! ");
bbprivatemessage.push("Success is on it's way to you ");
bbprivatemessage.push("Make today the best possible day ");
bbprivatemessage.push("Reach for the moon!! ")

var bbemoji = Array();

bbemoji.push("(づ｡◕‿‿◕｡)づ");
bbemoji.push("ᕙ(⇀‸↼‶)ᕗ");
bbemoji.push("(ᵔᴥᵔ)");
bbemoji.push("✧*｡٩(ˊᗜˋ*)و✧*｡");
bbemoji.push("ʕ•ᴥ•ʔ");
bbemoji.push("(*•̀ᴗ•́*)و ̑̑");
bbemoji.push("(๑˃̵ᴗ˂̵)و");
bbemoji.push("(๑•̀ㅂ•́)و✧");
bbemoji.push("٩(˃̶͈̀௰˂̶͈́)و");
bbemoji.push("");

var message = bbprivatemessage[Math.floor(Math.random()*bbprivatemessage.length)];
console.log(message);
var emoji = bbemoji[Math.floor(Math.random()*bbemoji.length)];
console.log(emoji);

function followed(eventMsg){
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	tweetIt("@" + screenName + " " + message + emoji);
	console.log(screenName + " is now following Bonbon.")
}